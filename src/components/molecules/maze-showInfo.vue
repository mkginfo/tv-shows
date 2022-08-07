<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <maze-image :show-image="showInfo.image" />
      </div>
      <div class="col-md-9">
        <div class="mb-4 mt-md-0 mt-lg-4" v-if="showInfo.rating">
          <span class="font-weight-bold">Rating: </span>
          <span class="pl-3">{{ showInfo.rating.average }}/10</span>
        </div>
        <div class="mb-4">
          <span class="font-weight-bold">Runtime: </span>
          <span class="pl-3">{{ showInfo.runtime }} Mins</span>
        </div>
        <div class="mb-4">
          <span class="font-weight-bold">Language: </span>
          <span class="pl-3">{{ showInfo.language }}</span>
        </div>
        <div class="mb-4">
          <span class="font-weight-bold">Release date: </span>
          <span class="pl-3">{{ showInfo.premiered }}</span>
        </div>
        <div class="mb-4">
          <span class="font-weight-bold">Genres: </span>
          <span class="pl-3">{{ showInfo.genres | joinArray }}</span>
        </div>
        <div class="d-md-none d-xl-block">
          <p class="text-justify" v-html="showInfo.summary"></p>
        </div>
      </div>
    </div>
    <div class="row px-3 d-none d-md-block d-xl-none">
      <p class="text-justify" v-html="showInfo.summary"></p>
    </div>
  </div>
</template>
<script>
import mazeImage from "@/components/atoms/maze-image.vue";
export default {
  props: { showInfo: { type: Object } },
  components: {
    mazeImage
  },
  filters: {
    joinArray: function(value) {
      if (!value) return "";
      return value.join(" | ");
    }
  }
};
</script>
