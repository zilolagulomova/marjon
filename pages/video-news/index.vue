<template>
  <main>
    <SectionsNewsVideoNews/>
    <div class="bg-gray-200 pt-16 pb-24">
      <div class="grid grid-cols-1 mt-8 gap-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 container">
        <CommonCardsVideoNews v-for="(card, index) in videoNews?.results" :key="index" :card="card"/>
      </div>
    </div>
    <SectionsAboutSharh />
  </main>
</template>
<script setup lang="ts">
import {configApi} from "~/composables/configApi";

const {$get, isLoading} = configApi()
definePageMeta({
  layout: 'orange',
})

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

const videoNews = ref<{ results: VideoNews[] } | null>(null);
const videoNewsFetch = async () => {
  try {
    videoNews.value = await $get("news/VideoNewsList/")
  } catch (error) {
    console.log(error.message || error);
  }
}
onMounted(async () => {
  try {
    await Promise.all([videoNewsFetch()])
  } catch (error) {
    console.error("Xatolik:", error);
  }
});
</script>

<style scoped>

</style>