<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: "",
  },
  id: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="`/show/${id}`">
    <img
      v-if="image"
      :title="name"
      :src="image"
      class="show-card"
      loading="lazy"
      :alt="`${name} image`"
    />
    <img
        v-else-if="image.length === 0"
        src="@/assets/images/default-image.png"
        :title="name"
        class="show-card"
        loading="lazy"
        :alt="`${name} image`"
    />
    <span class="sr-only">{{ name }}</span>
  </RouterLink>
</template>

<style scoped>
@import "@/assets/base.css";

.show-card {
  display: inline-block;
  flex-shrink: 0;
  margin-right: 10px;
  border-radius: var(--border-radius);
  transition: all 0.2s;
  width: 120px;
  height: 160px;
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
</style>
