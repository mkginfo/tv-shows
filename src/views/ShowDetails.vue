<template>
  <div class="tv-shows-details-content">
    <div class="container pt-5">
      <div class="pl-4 pr-4 pt-5 text-secondary">
        <TVShowInfo v-if="showDetails" :show-info="showDetails" />
        <Seasons
          v-if="showSeasons.length > 0"
          :show-id="showId"
          :seasons="showSeasons"
        />
        <CastCrew
          v-if="castData.length > 0 || crewData.length > 0"
          :cast-data="castData"
          :crew-data="crewData"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getShow } from "@/services/ShowsService";
import Seasons from "@/components/ui/Seasons.vue";
import TVShowInfo from "@/components/ui/TVShowInfo.vue";
import CastCrew from "@/components/ui/CastCrew.vue";

export default {
  components: {
    Seasons,
    TVShowInfo,
    CastCrew
  },
  data() {
    return {
      showId: "",
      castData: [],
      crewData: [],
      showSeasons: [],
      showDetails: null
    };
  },
  methods: {
    async fetchShowDetails() {
      this.showId = this.$route.params.id;
      this.showDetails = await getShow(this.showId);
      if (this.showDetails._embedded) {
        this.showSeasons = this.showDetails._embedded.seasons;
        this.castData = this.showDetails._embedded.cast;
        this.crewData = this.showDetails._embedded.crew;
      }
    }
  },
  created() {
    this.fetchShowDetails();
  }
};
</script>
