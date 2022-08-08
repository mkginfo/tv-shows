<template>
  <div class="mx-3 my-4">
      <OverviewSection :shows="popularShows" :name="`Popular shows`">
        <figure class="col-4" v-for="(show, index) in popularShows" :key="index" :index="index">
          <RouterLink
            :to="{
              name: 'show-details',
              params: { id: show.id, showData: show }
            }"
          >
            <lazyImage :src="show.image.medium" />
          </RouterLink>
          <div class="show-content h-50">
            <span>{{ show.name }}</span>&nbsp;
            <span class="float-right text-primary">
              {{ show.rating.average }}/{{ ratedBy }}
            </span>
          </div>
        </figure>
      </OverviewSection>
  </div>

</template>
<script>
import { RouterLink } from "vue-router";
import OverviewSection from "@/components/OverviewSection.vue";
import lazyImage from "@/components/atoms/maze-lazyImage.vue";
import {defineComponent} from "vue";
export default defineComponent({
  components: {lazyImage, OverviewSection},
  props: {
    popularShows: { type: Array, required: true }
  },
  data: () => ({ ratedBy: 10 }),
});
</script>
<style scoped>
.show-content {
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
  background-color: lightblue;
}

@media (max-width: 480px)   {
  .show-content {
    font-size: 10px;
    height: 45px !important;
  }
}
</style>
