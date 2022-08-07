<template>
  <div class="tv-shows-episodes-content">
    <div class="container pt-4">
      <maze-episodes
        :season-number="seasonNumber"
        :episodes-list="episodesList"
      />
    </div>
  </div>
</template>
<script>
import { getEpisodes } from "@/services/ShowsService";
import mazeEpisodes from "@/components/molecules/maze-episodes.vue";
export default {
  components: {
    mazeEpisodes
  },
  data() {
    return {
      seasonNumber: "",
      episodesList: []
    };
  },
  methods: {
    episodesBySeason(allEpisodes) {
      this.seasonNumber = parseInt(this.$route.params.seasonNumber);
      this.episodesList = allEpisodes.filter(
        episode => episode.season === this.seasonNumber
      );
    }
  },
  async created() {
    const allEpisodes = await getEpisodes(this.$route.params.id);
    this.episodesBySeason(allEpisodes);
  }
};
</script>
