<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useStore } from "@/stores";
import { GENRES } from "@/constants";

import HorizontalSection from "@/components/HorizontalSection.vue";
import ShowCard from "@/components/ui/ShowCard.vue";
import SearchBar from "@/components/ui/SearchBar.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

const route = useRoute();
const router = useRouter();
const store = useStore();

onMounted(async () => {
  // store all home page shows to prevent a request each time we navigate back
  // from a show details to the home page
  if (!store.homeSelection) {
    // get all shows and create the home page selection
    store.generateHomeSelection();
  }

  // if you enter the page with a query, populate the result
  // without updating the URL
  if (route.query?.q) {
    handleSearch(route.query.q, false);
  }
});

async function handleSearch(term, updateUrl = true) {
  store.fetchResults(term);

  if (updateUrl) {
    router.push({ path: "/", query: { ...route.query, q: term } });
  }
}
</script>

<template>
  <div class="banner">
    <div class="banner__content">
      <h1>Welcome to Vue-TV</h1>
      <h2>The best site to browse your favorie TV shows</h2>
      <div class="search">
        <SearchBar :defaultValue="route.query?.q" @search="handleSearch" />
      </div>
    </div>
  </div>
  <div class="content">
    <template v-if="store.areResultsLoading">
      <LoadingSpinner />
    </template>
    <HorizontalSection
      v-if="store.searchResults.length && !store.areResultsLoading"
      :name="`Results for ${route.query?.q}`"
    >
      <ShowCard
        :id="show.id"
        :name="show.name"
        :image="show.image"
        v-for="show in store.searchResults"
        :key="show.id"
      />
    </HorizontalSection>

    <template v-if="store.areSectionsLoading">
      <LoadingSpinner />
    </template>

    <template v-if="store.homeSelection && !store.areSectionsLoading">
      <HorizontalSection :name="genre" v-for="genre in GENRES" :key="genre">
        <ShowCard
          :id="show.id"
          :name="show.name"
          :image="show.image"
          v-for="show in store.homeSelection[genre]"
          :key="show.id"
        />
      </HorizontalSection>
    </template>
  </div>
</template>
<style scoped>
.content {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 45vh;
  overflow: auto;
  z-index: 1;
}

.banner {
  display: flex;
  height: 45vh;
  background-size: cover;
  background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-movies-index-1628968089.jpg");
  position: fixed;
  width: 100%;
  overflow: auto;
  z-index: 2;
}

.banner:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to bottom right, #000e17, #080514);
  opacity: 0.6;
}

.banner__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.banner__content > h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.banner__content > h2 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.banner__content > .search {
  width: 100%;
}
</style>
