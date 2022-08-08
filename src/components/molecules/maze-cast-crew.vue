<script setup>
import OverviewSection from "@/components/OverviewSection.vue";
</script>

<template>
  <div>
    <div class="pt-4" v-if="castData.length > 0">
      <div class="row pt-4 pb-4">
        <OverviewSection :shows="castData" :name="`Cast`">
          <div
            class="col-md-2 col-4"
            v-for="(cast, index) in castData"
            :key="index"
          >
            <img
              v-if="cast.person.image"
              :src="cast.person.image.medium"
              class="figure-img rounded border-success w-100 mx-auto d-block"
            />
            <img
              v-else
              src="@/assets/images/default-image.png"
              class="figure-img rounded border-success w-100 mx-auto d-block"
            />
            <div class="text-center">{{ cast.person.name }}</div>
          </div>
        </OverviewSection>
      </div>
    </div>
    <div class="pt-4" v-if="crewData.length > 0">
      <div class="row pt-4 pb-4">
        <OverviewSection :shows="crewData" :name="`Crew`">
          <div
            class="col-md-2 col-4 "
            v-for="(crew, index) in crewData"
            :key="index"
          >
            <img
              v-if="crew.person.image"
              :src="crew.person.image.medium"
              class="figure-img rounded border-success w-100 mx-auto d-block"
            />
            <img
              v-else
              src="@/assets/images/default-image.png"
              class="figure-img rounded border-success w-100 mx-auto d-block"
            />
            <div class="text-center">{{ crew.type }}</div>
          </div>
        </OverviewSection>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    castData: { type: Array },
    crewData: { type: Array }
  }
};
</script>
