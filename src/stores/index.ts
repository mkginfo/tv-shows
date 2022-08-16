import { defineStore } from "pinia";

import ShowsApi, {getSearchShows} from "@/services/ShowsService";
import {
  extractGenres,
  mapShowsByGenre,
  shortShows,
  getPopularShows,
  getShowsByGenres
} from "@/utils";
import type {
  SearchShow,
  Show,
  StoreInterface,
  ShowByGenre
} from "@/models/tvmaze.model";
import type {Genre, GenreShow} from "@/models/tvmaze.model";
import type { ShowDetails } from "@/models/tvmaze.model";
import { useRoute } from "vue-router";

const route = useRoute();

export const useStore = defineStore("main", {
  state: (): StoreInterface => ({
    _allShows: [] as Show[],
    _allGenres: [],
    _homeSelection: [] as GenreShow,
    _popularShows: [] as Show[],
    _showsByGenres: [] as ShowByGenre[],
    _searchText: '',
    _results: [] as Show[],
    _showDetails: null,
    loading: {
      sections: false,
      results: false,
      details: false,
    },
  }),
  getters: {
    allShows: (state: StoreInterface) => state._allShows,
    allGenres: (state: StoreInterface) => state._allGenres,
    homeSelection: (state: StoreInterface) => state._homeSelection,
    popularShows: (state: StoreInterface) => state._popularShows,
    showsByGenres: (state: StoreInterface) => state._showsByGenres,
    searchTextValue: (state: StoreInterface) => state._searchText,
    searchResults: (state: StoreInterface) => state._results,
    showDetails: (state: StoreInterface) => state._showDetails,
    areSectionsLoading: (state: StoreInterface) => state.loading.sections,
    areResultsLoading: (state: StoreInterface) => state.loading.results,
    areDetailsLoading: (state: StoreInterface) => state.loading.details,
  },
  actions: {
    async setAllShow() {
      this.loading.sections = true;
      const allShows = await ShowsApi.getAllShows();
      this._allShows = allShows;
      this.loading.sections = false;
    },
    async setAllGenres(shows: Show[]) {
      this.loading.sections = true;
      this._allGenres = extractGenres(shows);
      this.loading.sections = false;
    },
    async generateHomeSelection(shows: Show[]) {
      this.loading.sections = true;
      this._homeSelection = mapShowsByGenre(shows);
      this.loading.sections = false;
    },

    async setPopularShows(shows: Show[]) {
      this.loading.sections = true;
      this._popularShows = getPopularShows(shows);
      this.loading.sections = false;
    },

    async setShowsByGenres(shows: Show[]) {
      this.loading.sections = true;
      this._showsByGenres = getShowsByGenres(shows);
      this.loading.sections = false;
    },

    async fetchResults(searchText: string) {
      this.loading.results = true;
      this._searchText = searchText;
      const searchShows = await ShowsApi.getSearchShows(searchText);
      this._results = shortShows(searchShows.map((res: SearchShow) => res.show));
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
