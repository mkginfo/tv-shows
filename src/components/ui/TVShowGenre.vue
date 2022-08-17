<template>
  <div class="mx-3 my-4">
    <div v-for="(genre, index) in genresData" :key="index">
      <div class="pl-4 pr-4">
        <OverviewSection :shows="genre.shows" :name="`${genre.genre} shows`">
        <div
            v-for="(show, index) in genre.shows"
            :key="index"
            :index="index"
            class="show-card"
        >
            <router-link
                class="text-decoration-none"
              :to="{ name: 'show-details', params: { id: show.id } }"
            >
              <div class="show">
                <LazyImage :src="show.image?.medium" />
                <div class="show-overlay"></div>
                <div class="show-details text-light fadeIn-bottom">
                  <h3 class="text-uppercase">Rating</h3>
                  <p>{{ show.rating?.average }}/10</p>
                  <div class="show-year">{{show.premiered}}</div>
                  <a class="text-light">View show</a>
                </div>
                <div class="col-12 text-truncate text-center">
                  {{show.name}}
                </div>
              </div>

            </router-link>
          </div>
        </OverviewSection>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import OverviewSection from "@/components/ui/OverviewSection.vue";
import LazyImage from "@/components/form/LazyImage.vue";
import {defineComponent} from "vue";
import type { PropType } from "vue";
import type { ShowByGenre} from "@/models/tvmaze.model";
export default defineComponent({
  components: { LazyImage, OverviewSection },
  props: {
    genresData: { type:  Array as PropType<ShowByGenre[]>, required: true }
  }
});
</script>
<style scoped>
.show-card {
  display: inline-block;
  flex-shrink: 0;
  margin-right: 10px;
  border-radius: var(--border-radius);
  transition: all 0.2s;
  width: 120px;
  height: 100%;
}

.show-card:hover {
  transform: scale(1.03);
}

@media (min-width: 860px) {
  .show-card {
    margin-right: 20px;
    height: 300px;
    width: 200px;
  }
}

.show {
  position: relative;
}

.fadeIn-bottom {
  top: 80%;
}

.show-details p {
  font-size: 1em;
}

.show-details h3 {
  letter-spacing: 0.15em;
}

.show:hover .show-details {
  cursor: pointer;
  top: 50%;
  left: 50%;
  opacity: 1;
}

.show .show-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
}

.show:hover .show-overlay {
  opacity: 1;
}

.show-details {
  position: absolute;
  text-align: center;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

</style>
