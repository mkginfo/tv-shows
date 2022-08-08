<template>
  <div class="pl-4 pr-4 pt-2 mt-5">
    <h3 class="text-secondary">{{ getEpisodesName()}} - Season {{ seasonNumber }} episodes</h3>
    <div class="row">
      <div
        class="col-md-2 col-6 mt-4"
        v-for="(episode, index) in episodesList"
        :key="index"
      >
        <a :href="episode.url"><Image :show-image="episode.image"/></a>
        <div class="text-center">{{ episode.number }} {{ episode.name }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Image from "@/components/form/Image.vue";
import {defineComponent} from "vue";
import type {PropType} from "vue";
import type {Episodes} from "@/models/tvmaze.model";

export default defineComponent({
  components: {
    Image
  },
  props: {
    seasonNumber: {
      type: [Number, String],
      required: true
    },
    episodesList: {
      type: Array as PropType<Episodes[]>,
      required: true
    }
  },
  methods: {
    getEpisodesName(): string {
      return this.episodesList?.length > 0 ? this.episodesList[0].name : "";
    }
  }
});
</script>
