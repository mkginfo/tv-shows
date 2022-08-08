<template>
  <div class="tv-shows-content">
    <div class="container pt-4">
      <div class="px-4 pt-5 mt-5 text-center">
        <div class="display-4 fs-1 fw-bold text-secondary">Welcome to Vue-TV</div>
      </div>
      <TVShowPopular v-if="popularShows.length > 0" :popular-shows="popularShows"/>
      <TVShowGenre v-if="showsByGenres.length > 0" :genresData="showsByGenres" />
    </div>
  </div>
</template>

<script>
import { getAllShows } from "@/services/ShowsService";
import TVShowGenre from "@/components/organisms/TVShowGenre.vue";
import TVShowPopular from "@/components/organisms/TVShowPopular.vue";
import mazeSearch from "@/components/atoms/maze-search.vue";
export default {
  components: {
    TVShowGenre,
    TVShowPopular,
    mazeSearch,
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
};
</script>
