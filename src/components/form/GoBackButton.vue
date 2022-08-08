<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <button class="go-back-button" @click="router.go(-1)">
    👈 Go back to previous screen
  </button>
</template>

<style scoped>
@import "@/assets/base.css";

.go-back-button {
  font-weight: 700;
  font-size: 1rem;
  z-index: 10;
  background: var(--color-white);
  padding: 5px 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  color: var(--color-black);
  cursor: pointer;
}
</style>
