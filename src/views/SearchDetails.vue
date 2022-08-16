<template>
  <div class="tv-shows-search-content">
    <div class="container pt-4">
      <template v-if="store.areResultsLoading">
        <LoadingSpinner />
      </template>

      <div class="pl-4 pr-4 pt-1 mt-5" v-if="shows.length > 0">
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
                params: { id: show.id}
              }"
            >
              <Image :show-image="show.image" />
            </router-link>
            <div class="text-secondary text-center">{{ show.name }}</div>
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
<script lang="ts">
import {defineComponent} from "vue";
import Image from "@/components/form/Image.vue";
import { useRoute } from "vue-router";
import { useStore } from "@/stores";
import type { Show } from "@/models/tvmaze.model";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

export default defineComponent({
  components: {
    Image,
    LoadingSpinner
  },
  setup() {
    const route = useRoute();
    const store = useStore();

    return {
      store,
      route
    }
  },
  data() {
    return {
      shows: [] as Show[]
    };
  },

  props: {
    searchText: {
      type: String,
      required: true
    }
  },

  methods: {
    async getSearchDetails(searchText: string) {
      if(await this.store.searchTextValue !== searchText) {
        await this.store.fetchResults(searchText);
      }
      this.shows = await this.store.searchResults;
    }
  },

  created() {
    this.getSearchDetails(this.searchText);
  },

  beforeRouteUpdate(to, from, next) {
    this.getSearchDetails(to.params.searchText as string);
    next();
  }
});
</script>
<style scoped>
.noshows {
  height: 85vh;
}
</style>
