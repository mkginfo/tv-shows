<template>
  <div class="mx-3 my-4">
      <OverviewSection :shows="popularShows" :name="`Popular shows`">
        <figure class="col-4" v-for="(show, index) in popularShows" :key="index" :index="index">
          <RouterLink
            :to="{
              name: 'show-details',
              params: { id: show.id}
            }"
          >
            <LazyImage :src="show.image?.medium" />
          </RouterLink>
          <div class="show-content h-50">
            <span>{{ show.name }}</span>&nbsp;
            <span class="float-right text-primary">
              {{ show.rating?.average }}/{{ ratedBy }}
            </span>
          </div>
        </figure>
      </OverviewSection>
  </div>

</template>
<script lang="ts">
import {defineComponent} from "vue";
import type { PropType } from "vue";
import { RouterLink } from "vue-router";
import OverviewSection from "@/components/ui/OverviewSection.vue";
import LazyImage from "@/components/form/LazyImage.vue";
import type {Show} from "@/models/tvmaze.model";

export default defineComponent({
  components: {LazyImage, OverviewSection},
  props: {
    popularShows: { type: Array as PropType<Show[]>, required: true }
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
