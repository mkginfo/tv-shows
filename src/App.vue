<template>
  <Header />
  <RouterView />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { computed, defineComponent } from 'vue';
import Header from "@/components/ui/Header.vue";

export default defineComponent({
  components: { Header },
})
</script>


<style scoped>
@import "@/assets/base.css";
</style>
