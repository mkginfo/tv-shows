<template>
  <div class="tv-shows-content" >
    <div class="container pt-4">
      <div class="px-4 pt-5 mt-5 text-center">
        <div class="display-4 fs-1 fw-bold text-secondary">Welcome to TVShows</div>
      </div>
      <div class="m-2 p-2 d-xs-block d-sm-block d-md-none">
        <Search />
      </div>

      <template v-if="store.areSectionsLoading">
        <LoadingSpinner />
      </template>

      <TVShowPopular v-if="popularShows.length > 0" :popular-shows="popularShows"/>
    </div>
  </div>

  <div class="container pt-4">
    <TVShowGenre v-if="showsByGenres.length > 0" :genresData="showsByGenres" />
  </div>

</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import TVShowGenre from "@/components/ui/TVShowGenre.vue";
import TVShowPopular from "@/components/ui/TVShowPopular.vue";
import Search from "@/components/form/Search.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
import { useStore } from "@/stores";
import type { Show, ShowByGenre } from "@/models/tvmaze.model";

export default defineComponent({
  components: {
    TVShowGenre,
    TVShowPopular,
    Search,
    LoadingSpinner
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  },
  data() {
    return {
      loading: false,
      allShows: [] as Show[],
      popularShows: [] as Show[],
      showsByGenres: [] as ShowByGenre[],
    };
  },
  async created() {
    // store all home page shows to prevent a request each time we navigate back
    // from a show details to the home page
    if (this.store.allShows.length == 0) {
      // get all shows and create the home page selection
      await this.store.setAllShow();
      this.allShows = await this.store.allShows;
      await this.store.setPopularShows(this.allShows);
      await this.store.setShowsByGenres(this.allShows);
    }

    this.allShows = await this.store.allShows;
    this.popularShows = await this.store.popularShows;
    this.showsByGenres = await this.store.showsByGenres;
  }
});
</script>