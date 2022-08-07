import axios from "axios";
import router from "@/router/index";
import type {SearchShow, Show} from "@/models/tvmaze.model";

const apiClient = axios.create({
  baseURL: `https://api.tvmaze.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const path = "/error";
    router.push(path);
    return Promise.reject(error);
  }
);
// Api request for all shows
export const getAllShows = (): Promise<Show[]> => apiClient.get("/shows");

// Api request to get all episodes
export const getEpisodes = (id: number) =>
  apiClient.get(`shows/${id}/episodes`);

// Api request for particular show id
export const getShow = (id: number) =>
  apiClient.get(`/shows/${id}?embed[]=seasons&embed[]=cast&embed[]=crew`);

// Api request to search shows
export const getSearchShows = (searchText: string) => apiClient.get(`/search/shows?q=${searchText}`);

export const searchByTerm = (term = ""): Promise<SearchShow[]> => apiClient.get(`/search/shows?q=${term}`);

export const getShowDetails = (id: number): Promise<Show> => apiClient.get(`/shows/${id}?embed[]=cast&embed[]=seasons`);

export default {
  getAllShows,
  getEpisodes,
  getShow,
  getSearchShows,
  searchByTerm,
  getShowDetails,
};
