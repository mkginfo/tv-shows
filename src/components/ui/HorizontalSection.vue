<script setup>
import { ref } from "vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
});

const scrollContainer = ref(null);

// basic horizontal scroll implementation
// TODO: this could be a directive
function handleHorizontalScroll(ev) {
  const isVerticalScrolling = Math.abs(ev.deltaY) !== 0;
  const elHasHorizontalScroll =
    scrollContainer.value?.scrollWidth > scrollContainer.value?.clientWidth;

  if (isVerticalScrolling && elHasHorizontalScroll) {
    // prevent scrolling vertically and do it on the X axis
    ev.preventDefault();
    scrollContainer.value.scrollLeft += ev.deltaY;
  }
}
</script>

<template>
  <section class="horizontal-section">
    <h2 class="horizontal-section__title">{{ name }}</h2>
    <div
      class="horizontal-section__content"
      ref="scrollContainer"
      @wheel="handleHorizontalScroll"
    >
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
.horizontal-section {
  margin-bottom: 10px;
}

.horizontal-section__title {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 5px;
}

.horizontal-section__content {
  overflow: auto;
  overflow-x: scroll;
  width: 100%;
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 5px;
}

.horizontal-section__content::-webkit-scrollbar {
  display: none;
}

@media (min-width: 860px) {
  .horizontal-section__title {
    font-size: 1.5rem;
  }
}
</style>
