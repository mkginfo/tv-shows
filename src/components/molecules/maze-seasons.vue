<template>
  <div>
    <div class="pt-4">
      <h3>Seasons</h3>
      <div class="row">
        <div
          class="col-md-2 col-6 mt-4"
          v-for="(season, index) in seasons"
          :key="index"
        >
          <router-link
            :to="{
              name: 'episodes',
              params: { id: showId, seasonNumber: season.number }
            }"
          >
            <maze-image :show-image="season.image" />
            <div class="text-center">Season {{ season.number }}</div>
          </router-link>
        </div>
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
  props: { seasons: { type: Array }, showId: { type: [Number, String] } }
};
</script>
