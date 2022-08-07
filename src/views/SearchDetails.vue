<template>
  <div class="tv-shows-search-content">
    <div class="container pt-4">
      <div class="pl-4 pr-4 pt-1" v-if="shows.length > 0">
        <h3 class="pt-4 text-secondary">Shows found "{{ searchText }}"</h3>
        <div class="row">
          <div
            class="col-md-2 col-6 mt-4"
            v-for="(show, index) in shows"
            :key="index"
          >
            <router-link
              :to="{
                name: 'show-details',
                params: { id: show.show.id, showData: show.show }
              }"
            >
              <maze-image :show-image="show.show.image" />
            </router-link>
            <div class="text-secondary text-center">{{ show.show.name }}</div>
          </div>
        </div>
      </div>
      <div v-else>
        <h2 class="noshows d-flex justify-content-center align-items-center">
          No shows found
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearchShows } from "@/services/ShowsService";
import mazeImage from "@/components/atoms/maze-image.vue";
import {defineComponent} from "vue";
export default defineComponent({
  components: {
    mazeImage
  },

  data() {
    return {
      shows: []
    };
  },

  props: {
    searchText: {
      type: String,
      required: true
    }
  },

  methods: {
    async getSearchDetails(searchText) {
      this.shows = await getSearchShows(searchText);
    }
  },

  created() {
    this.getSearchDetails(this.searchText);
  },

  beforeRouteUpdate(to, from, next) {
    this.getSearchDetails(to.params.searchText);
    next();
  }
});
</script>
<style scoped>
.noshows {
  height: 85vh;
}
</style>
