<template>
  <div class="tv-shows-episodes-content">
    <div class="container pt-4 mt-4">
      <Episodes
          :season-number="seasonNumber"
          :episodes-list="episodesList"
      />
    </div>
  </div>
</template>
<script>
import { getEpisodes } from "@/services/ShowsService";
import Episodes from "@/components/ui/Episodes.vue";
export default {
  components: {
    Episodes
  },
  data() {
    return {
      showName: "",
      seasonNumber: "",
      episodesList: []
    };
  },
  methods: {
    getShowName() {
      return this.episodesList[0].name;
    },
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
