<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "@/assets/images/default_person.png",
  },
});
</script>

<template>
  <div class="cast-card">
    <img :src="image" alt="" class="cast-card__image" />
    <span class="cast-card__name">{{ name }}</span>
  </div>
</template>

<style scoped>
@import "@/assets/base.css";

.cast-card {
  width: 120px;
  height: 160px;
  flex-shrink: 0;
  margin-right: 10px;
  border-radius: var(--border-radius);
}

.cast-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.cast-card__name {
  font-size: 10px;
  background: var(--color-black);
  color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 4px 8px;
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
