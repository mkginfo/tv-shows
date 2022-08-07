import { defineStore } from "pinia";

import ShowsApi from "@/services/ShowsService";
import {
  formatShows,
  mapShowsByGenre,
  extractGenres,
  generateNewListByGenre,
} from "@/utils";
import type {
  GenreShow,
  Show,
  SearchShow,
  StoreInterface,
} from "@/models/tvmaze.model";
import {Genre} from "@/models/tvmaze.model";
import type {ShowDetails} from "@/models/tvmaze.model";
import { useRoute } from "vue-router";

const route = useRoute();

export const useStore = defineStore("main", {
  state: (): StoreInterface => ({
    _homeSelection: null,
    _results: [],
    _showDetails: null,
    loading: {
      sections: false,
      results: false,
      details: false,
    },
  }),
  getters: {
    homeSelection: (state: StoreInterface) => state._homeSelection,
    searchResults: (state: StoreInterface) => state._results,
    showDetails: (state: StoreInterface) => state._showDetails,
    areSectionsLoading: (state: StoreInterface) => state.loading.sections,
    areResultsLoading: (state: StoreInterface) => state.loading.results,
    areDetailsLoading: (state: StoreInterface) => state.loading.details,
  },
  actions: {
    async generateHomeSelection() {
      this.loading.sections = true;

      const allShows = await ShowsApi.getAllShows();
      const shows = formatShows(allShows);
      const byGenre = mapShowsByGenre(shows, Object.keys(Genre) as Genre[]);

      // const category = (show: Show[]) => extractGenres(show);
      // const moviesByCategory = (show: Show[])  =>
      //     generateNewListByGenre(show, extractGenres(show));

      this._homeSelection = byGenre;
      this.loading.sections = false;
    },
    async fetchResults(term: any) {
      this.loading.results = true;
      const allShows = await ShowsApi.searchByTerm(term);

      this._results = formatShows(allShows.map((res: SearchShow) => res.show));
      this.loading.results = false;
    },
    async fetchShowDetails(id: number) {
      this.loading.details = true;
      const show = await ShowsApi.getShowDetails(id);

      this._showDetails = {
        info: {
          id,
          image: show.image?.original || show.image?.medium,
          name: show.name,
          summary: show.summary,
          average: show.rating?.average,
        },
        seasons: show._embedded?.seasons || [],
        cast: show._embedded?.cast || [],
      } as ShowDetails;
      this.loading.details = false;
    },
    removeShowDetails() {
      this._showDetails = null;
    },
    searchText() {
      return route.query?.q;
    },
  },
});
