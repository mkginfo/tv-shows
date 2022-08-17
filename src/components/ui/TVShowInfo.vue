<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <Image :show-image="showInfo.image" />
      </div>
      <div class="col-md-9">
        <div class="mb-4 mt-md-0 mt-lg-4" v-if="showInfo.name">
          <h1 class="pl-3 show-name">{{ showInfo.name }}</h1>
        </div>
        <div class="mb-4 mt-md-0 mt-lg-4" v-if="showInfo.rating">
          <span class="fw-bold">Rating: </span>
          <span class="pl-3 show-rating">{{ showInfo.rating.average }} / 10</span>
        </div>
        <div class="mb-4">
          <span class="fw-bold">Runtime: </span>
          <span class="pl-3 show-runtime">{{ showInfo.runtime }} Mins</span>
        </div>
        <div class="mb-4">
          <span class="fw-bold">Language: </span>
          <span class="pl-3 show-language">{{ showInfo.language }}</span>
        </div>
        <div class="mb-4">
          <span class="fw-bold">Release date: </span>
          <span class="pl-3 show-premiered">{{ showInfo.premiered }}</span>
        </div>
        <div class="mb-4">
          <span class="fw-bold">Genres: </span>
          <span class="pl-3 badge text-bg-success p-2 m-1 show-genres" v-for="(genre, index) in showInfo.genres" :key="index" :index="index">
            {{genre}}
          </span>
        </div>
        <div class="d-md-none d-xl-block">
          <p class="text-justify show-rating" v-html="showInfo.summary"></p>
        </div>
      </div>
    </div>
    <div class="row px-3 d-none d-md-block d-xl-none">
      <p class="text-justify" v-html="showInfo.summary"></p>
    </div>
  </div>
</template>

<script>
import Image from "@/components/form/Image.vue";
import {defineComponent} from "vue";
export default defineComponent({
  props: { showInfo: { type: Object } },
  components: {
    Image
  },
  filters: {
    joinArray: (value) => {
      if (!value) return "";
      return value.join(" | ");
    }
  }
});
</script>
