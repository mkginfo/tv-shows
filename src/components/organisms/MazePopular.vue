<template>
  <div>
      <OverviewSection :shows="popularShows" :name="`Popular shows`">
        <figure v-for="(show, index) in popularShows" :key="index" :index="index">
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
      </OverviewSection>
  </div>

  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item  h-25" :class="{ active: index===0 }" v-for="(show, index) in popularShows" :key="index" :index="index">
        <img :src="show.image.medium || show.image.original" class="d-block w-100 h-25" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";
import OverviewSection from "@/components/OverviewSection.vue";
import * as Bootstrap from 'bootstrap'
import {defineComponent} from "vue";
export default defineComponent({
  components: {OverviewSection},
  props: {
    popularShows: { type: Array, required: true }
  },
  data: () => ({ ratedBy: 10 }),
  mounted() {
    var myCarousel = document.querySelector('#carouselExampleCaptions')
    new Bootstrap.Carousel(myCarousel)
  }
});
</script>
<style scoped>
.show-content {
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
  background-color: white;
}
</style>
