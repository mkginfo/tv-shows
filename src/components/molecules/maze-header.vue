<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link :to="{ name: 'dashboard' }" class="navbar-brand">
          <h1>MazeTV</h1>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'dashboard' }" class="nav-link active" aria-current="page">
                Dashboard
              </router-link>
            </li>
          </ul>
          <maze-search />
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import mazeSearch from "@/components/atoms/maze-search.vue";
export default {
  components: {
    mazeSearch
  }
};
</script>
