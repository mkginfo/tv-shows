<script setup>
import { ref } from "vue";

const props = defineProps({
  defaultValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["search"]);

const term = ref(props.defaultValue);

function handleSubmit() {
  if (term.value) {
    emit("search", term.value);
  }
}
</script>

<template>
  <div class="searchbar container">
    <form class="searchbar" @submit.prevent="handleSubmit">
      <input
          type="text"
          v-model="term"
          placeholder="Search..."
          class="searchbar__input"
      />
      <button class="searchbar__button" type="submit">🔍</button>
    </form>
  </div>
</template>

<style>
@import "@/assets/base.css";
.searchbar {
  display: flex;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
}

.searchbar__input {
  margin: 0;
  width: 100%;
  border: none;
  outline: none;
  height: 45px;
  color: var(--color-text);
  padding: 6px 12px;
  background: var(--color-background-alternative);
}

.searchbar__button {
  margin: 0;
  border: 0;
  cursor: pointer;
  color: var(--color-text);
  height: 45px;
  padding: 6px 12px;
  background: var(--color-background-alternative);
}

@media (min-width: 860px) {
  .searchbar {
    max-width: 600px;
  }

  .searchbar__input {
    height: 50px;
  }

  .searchbar__button {
    height: 50px;
  }
}
</style>
