<template>
  <div>
    <img
      v-if="showImage"
      :src="showImage.medium"
      class="figure-img rounded w-100"
    />
    <img
      v-else
      src="@/assets/images/default-image.png"
      class="figure-img rounded w-100"
    />
  </div>
</template>

<script>
export default {
  props: ["showImage"]
};
</script>
<style scoped>
img:hover {
  transition: 0.3s;
  box-shadow: 12px 6px 8px rgb(125, 137, 145);
}
</style>
