<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">
          <h1 class="logo">TV Shows</h1>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link active" aria-current="page">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link active" aria-current="page">
                About
              </router-link>
            </li>
          </ul>
          <span>
            <Search />
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import Search from "@/components/form/Search.vue";
export default {
  components: {
    Search
  }
};
</script>
<style>

</style>
