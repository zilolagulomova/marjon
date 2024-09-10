<template>
  <main>
    <SectionsHero/>
    <SectionsAbout/>
    <SectionsPartners :data="data?.results || []"/>
    <SectionsVehicles :vehicles="vehicles?.results || []"/>
    <SectionsNews :news="news?.results || []"/>
    <SectionsNewsVideo :videoNews="videoNews?.results || []"/>
    <div v-if="statistics?.results">
      <SectionsStatistics :statistics="statistics?.results || []"/>
    </div>
    <SectionsApps />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
import {configApi} from "~/composables/configApi";

const {$get} = configApi()

interface TrustedUsItem {
  url: string,
  logo: string
}

interface CarType {
  id: number,
  title: string,
  slug: string,
  image: string,
  ordering: number,
}

interface News {
  slug: string,
  title: string,
  cover_image: string,
  created_at: string,
  is_redirect: boolean,
  news_url: string
}

interface VideoNews {
  id: number,
  slug: string,
  title: string,
  video_link: string,
  cover_image: string,
  created_at: string,
  is_redirect: boolean,
  news_url: string
}

interface Statistics {
  description: string,
  value: number,
}

const data = ref<{ results: TrustedUsItem[] } | null>(null);
const vehicles = ref<{ results: CarType[] } | null>(null);
const news = ref<{ results: News[] } | null>(null);
const videoNews = ref<{ results: VideoNews[] } | null>(null);
const statistics = ref<{ results: Statistics[] } | null>(null);

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
const vehiclesFetch = async () => {
  try {
    vehicles.value = await $get("cars/CarsTypeList/")
    console.log(vehicles.value)
  } catch (e) {
    console.error(e)
  }
}
const newsFetch = async () => {
  try {
    news.value = await $get("news/NewsList/")
  } catch (error) {
    console.log(error.message || error);
  }
}

const videoNewsFetch = async () => {
  try {
    videoNews.value = await $get("news/VideoNewsList/")
  } catch (error) {
    console.log(error.message || error);
  }
}
const statisticsFetch = async () => {
  try {
    statistics.value = await $get("common/Statistic/")
  } catch (error) {
    console.log(error.message || error);
  }
}

onMounted(async () => {
  try {
    await Promise.all([trustedUsFetch(), vehiclesFetch(), newsFetch(), videoNewsFetch(), statisticsFetch()])
  } catch (error) {
    console.error("Xatolik:", error);
  }
});
</script>
<style scoped>
.slider-container {
  width: 100%;
  height: 400px;
}
</style>