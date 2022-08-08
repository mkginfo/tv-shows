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
            <Image :show-image="season.image" />
            <div class="text-center">Season {{ season.number }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Image from "@/components/form/Image.vue";
export default {
  components: {
    Image
  },
  props: { seasons: { type: Array }, showId: { type: [Number, String] } }
};
</script>
