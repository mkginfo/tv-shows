<template>
  <div class="pl-4 pr-4 pt-2">
    <h3 class="text-secondary">Season {{ seasonNumber }} episodes</h3>
    <div class="row">
      <div
        class="col-md-2 col-6 mt-4"
        v-for="(episode, index) in episodesList"
        :key="index"
      >
        <a :href="episode.url"><maze-image :show-image="episode.image"/></a>
        <div class="text-center">{{ episode.number }} {{ episode.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import mazeImage from "@/components/atoms/maze-image.vue";
export default {
  components: {
    mazeImage
  },
  props: {
    seasonNumber: { type: [Number, String] },
    episodesList: { type: Array }
  }
};
</script>
