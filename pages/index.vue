<template>
  <main>
    <SectionsHero />
    <SectionsAbout />
    <SectionsPartners :data="data?.results || []" />
    <SectionsVehicles :vehicles="vehicles?.results || []" />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
import {configApi} from "~/composables/configApi";

const {$get} = configApi()
const data = ref<{ results: any[] } | null>(null);
const vehicles = ref<{ results: any[] } | null>(null);
const trustedUsFetch = async () => {
  try {
    data.value = await $get("common/TrustedUs/", {
      params: {
        limit: 20
      },
    });
  } catch (error) {
    console.error('Error:', error.message || error);
  }
}
const vehiclesFetch = async() => {
  try {
    vehicles.value = await $get("cars/CarsTypeList/")
    console.log(vehicles.value)
  } catch (e) {
    console.error(e)
  }
}
onMounted(async () => {
  trustedUsFetch()
  vehiclesFetch()
});
</script>
<style scoped>
.slider-container {
  width: 100%;
  height: 400px;
}
</style>