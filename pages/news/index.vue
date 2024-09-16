<template>
  <main>
    <SectionsNews />
    <div class="bg-gray-100 pt-16 pb-24">
      <div class="grid grid-cols-1 mt-8 gap-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 container">
        <CommonCardsNews v-for="(card, index) in news?.results" :key="index" :card="card"/>
      </div>
    </div>
    <SectionsAboutSharh />
  </main>
</template>
<script setup lang="ts">
import {configApi} from "~/composables/configApi";

const {$get} = configApi()

definePageMeta({
  layout: 'orange',
})

interface News {
  slug: string,
  title: string,
  cover_image: string,
  created_at: string,
  is_redirect: boolean,
  news_url: string
}

const news = ref<{ results: News[] } | null>(null);
const newsFetch = async () => {
  try {
    news.value = await $get("news/NewsList/")
  } catch (error) {
    console.log(error.message || error);
  }
}

onMounted(async () => {
  try {
    await Promise.all([newsFetch()])
  } catch (error) {
    console.error("Xatolik:", error);
  }
});
</script>


<style scoped>

</style>