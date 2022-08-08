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

</template>
<script>
import { RouterLink } from "vue-router";
import OverviewSection from "@/components/OverviewSection.vue";
import {defineComponent} from "vue";
export default defineComponent({
  components: {OverviewSection},
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
  background-color: white;
}
</style>
