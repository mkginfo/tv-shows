<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <h3 class="pl-4 pt-4 text-secondary">Popular shows</h3>
    <carousel-3d
      :loop="false"
      :height="400"
      :width="250"
      :display="10"
      :controls-visible="true"
    >
      <slide v-for="(show, index) in popularShows" :key="index" :index="index">
        <figure>
          <RouterLink
            :to="{
              name: 'show-details',
              params: { id: show.id, showData: show }
            }"
          >
            <img :src="show.image.medium" />
          </RouterLink>
          <div class="show-content">
            <span>{{ show.name }}</span>
            <span class="float-right text-primary">
              {{ show.rating.average }}/{{ ratedBy }}
            </span>
          </div>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: { Carousel3d, Slide },
  props: {
    popularShows: { type: Array, required: true }
  },
  data: () => ({ ratedBy: 10 })
};
</script>
<style scoped>
.show-content {
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
}
</style>
