<template>
  <maze-header />
  <RouterView />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { computed, defineComponent } from 'vue';
import mazeHeader from "@/components/molecules/maze-header.vue";

export default defineComponent({
  components: { mazeHeader },
})
</script>


<style scoped>
@import "@/assets/base.css";

#app {
  min-height: 100vh;
  margin: 0 auto;
  font-weight: normal;
}
</style>
