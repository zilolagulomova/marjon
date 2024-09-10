<template>
  <main>
    <SectionsAboutWeAre/>
    <SectionsAboutMarjon/>
    <SectionsAboutMore/>
    <SectionsAboutChoose :data="data?.results || []"/>
    <div v-if="statistics?.results">
      <SectionsStatistics :statistics="statistics?.results || []"/>
    </div>
    <SectionsAboutClients v-if="clients?.results?.length > 0" :clients="clients?.results || []"/>
    <SectionsAboutSharh/>
    <SectionsContact />
  </main>
</template>

<script setup lang="ts">
import {configApi} from "~/composables/configApi";

const {$get} = configApi()
useHead({title: 'Main Us'})
definePageMeta({
  layout: 'orange',
})

interface Statistics {
  description: string,
  value: number,
}

interface DataChoose {
  title: string,
  description: string,
  icon: string,
}
interface Clients {
  full_name: string,
  avatar: string,
  feedback: string
}

const statistics = ref<{ results: Statistics[] } | null>(null);
const data = ref<{ results: DataChoose[] } | null>(null);
const clients = ref<{ results: Clients[] } | null>(null);
const statisticsFetch = async () => {
  try {
    statistics.value = await $get("common/Statistic/")
  } catch (error) {
    console.log(error.message || error);
  }
}
const chooseFetch = async () => {
  try {
    data.value = await $get("common/WhyChooseUs/")
  } catch (error) {
    console.log(error.message || error);
  }
}

const clientsFetch = async () => {
  try {
    clients.value = await $get("common/CustomerFeedback/")
    console.log(clients.value)
  } catch (error) {
    console.log(error.message || error);
  }
}

onMounted(async () => {
  try {
    await Promise.all([statisticsFetch(), chooseFetch(), clientsFetch()])
  } catch (error) {
    console.error("Xatolik:", error);
  }
});
</script>

<style scoped>
</style>