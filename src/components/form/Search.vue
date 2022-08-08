<template>
  <form class="d-flex" role="search">
    <input
      v-model="searchtext"
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search" />
    <div v-if="searchtext">
      <router-link :to="{ name: 'search-details', params: { searchText: searchtext } }">
        <button class="btn btn-primary" type="submit">Search</button>
      </router-link>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      searchtext: ""
    };
  }
};
</script>
