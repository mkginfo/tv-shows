<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { computed, defineComponent } from 'vue';
import Header from "@/components/ui/Header.vue";
import Footer from "@/components/ui/Footer.vue";

export default defineComponent({
  components: { Header, Footer },
})
</script>


<style scoped>
@import "@/assets/base.css";
</style>
