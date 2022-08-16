<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../stores";

import HorizontalSection from "@/components/ui/HorizontalSection.vue";
import CastCard from "@/components/ui/CastCard.vue";
import GoBackButton from "@/components/ui/GoBackButton.vue";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

const route = useRoute();
const store = useStore();

onMounted(() => {
  if (route.params?.id) {
    store.fetchShowDetails(route.params.id);
  }
});

onUnmounted(() => {
  store.removeShowDetails();
});
</script>

<template>
  <div class="details-page">
    <template v-if="store.areDetailsLoading">
      <LoadingSpinner />
    </template>
    <template v-if="store.showDetails && !store.areDetailsLoading">
      <GoBackButton class="back-cta" />
      <div class="info">
        <img
            v-if="store.showDetails.info?.image"
          class="info__image"
          :src="store.showDetails.info?.image"
          alt="Show Image"
        />
        <img
            v-else-if="!store.showDetails.info?.image"
            src="@/assets/images/default-image.png"
            class="info__image"
            alt="Show Image"
        />
        <div class="info__description">
          <h1 class="title">
            {{ store.showDetails.info?.name }}
            <span v-if="store.showDetails.info.average"
              >(⭐ {{ store.showDetails.info.average }})</span
            >
          </h1>
          <h4 class="seasons">
            {{ store.showDetails.seasons?.length }} Seasons
          </h4>
          <p v-html="store.showDetails.info?.summary"></p>
        </div>
      </div>
      <HorizontalSection
        v-if="store.showDetails.cast.length"
        name="Cast"
        class="cast"
      >
        <CastCard
          v-for="{ person: { id, name, image } } in store.showDetails.cast"
          :key="id"
          :name="name"
          :image="image?.original || image?.medium"
        />
      </HorizontalSection>
    </template>
  </div>
</template>

<style scoped>
.back-cta {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.cast {
  padding: 1rem;
}

.title,
.seasons {
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.9rem;
}

.title {
  font-size: 1.7rem;
}

.seasons {
  font-size: 1.3rem;
}

.info {
  display: flex;
  flex-direction: column;
}

.info__image {
  height: 60vh;
  width: 100%;
  object-fit: fill;
}

.info__description {
  padding: 1rem;
}

@media (min-width: 860px) {
  .back-cta {
    position: inherit;
    top: 0;
    left: 0;
    margin: 1rem 0;
  }

  .cast {
    padding: 0;
    margin-top: 2rem;
  }
  .details-page {
    padding: 1rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  .info {
    flex-direction: row;
  }

  .info__description {
    padding-top: 0;
  }

  .info__image {
    max-width: 350px;
    height: 55vh;
  }
}
</style>
