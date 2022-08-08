<template>
  <div class="tv-shows-content">
    <div class="container pt-4">
      <div class="px-4 pt-5 mt-5 text-center">
        <div class="display-4 fs-1 fw-bold text-secondary">Welcome to TVShows</div>
      </div>
      <div class="m-2 p-2 d-xs-block d-sm-block d-md-none">
        <Search />
      </div>
      <TVShowPopular v-if="popularShows.length > 0" :popular-shows="popularShows"/>
      <TVShowGenre v-if="showsByGenres.length > 0" :genresData="showsByGenres" />
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { getAllShows } from "@/services/ShowsService";
import TVShowGenre from "@/components/ui/TVShowGenre.vue";
import TVShowPopular from "@/components/ui/TVShowPopular.vue";
import Search from "@/components/form/Search.vue";

export default defineComponent({
  components: {
    TVShowGenre,
    TVShowPopular,
    Search
  },
  data() {
    return {
      popularShows: [],
      showsByGenres: []
    };
  },
  methods: {
    // Get top rating shows
    getPopularShows(allShows) {
      const topRating = 9;
      const popularShows = allShows.filter(
        show => show.rating.average >= topRating
      );
      popularShows.sort((a, b) => b.rating.average - a.rating.average);
      return popularShows;
    },

    // Get all unique genres from all shows
    getUniqueGenres(allShows) {
      return [...new Set(allShows.map(show => show.genres).flat())].sort();
    },

    // Get shows per each genre and sort them according to rating
    getShowsByGenres(allShows) {
      const uniqueGeners = this.getUniqueGenres(allShows);
      const showsByGenres = uniqueGeners.map(genre => {
        const shows = allShows
          .filter(show => show.genres.includes(genre))
          .sort((a, b) => b.rating.average - a.rating.average);
        return { genre, shows };
      });
      return showsByGenres;
    }
  },

  async created() {
    const allShows = await getAllShows();
    this.popularShows = await this.getPopularShows(allShows);
    this.showsByGenres = await this.getShowsByGenres(allShows);
  }
});
</script>
