<template>
  <form class="d-flex" role="search">
    <input
      v-model="searchTextValue"
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search" />
    <div v-if="searchTextValue">
      <router-link :to="{ name: 'search-details', params: { searchText: searchTextValue } }">
        <button class="btn btn-primary" type="submit">Search</button>
      </router-link>
    </div>
  </form>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      searchTextValue: ""
    }
  },
});
</script>
