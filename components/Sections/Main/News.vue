<template>
  <section class="py-16 bg-gray-100">
    <div class="container">
      <div class="flex items-center justify-between">
        <CommonSectionTitleDescription :title="$t('news')" :desc="$t('news_title')"/>
        <NuxtLink to="/news">
          <CommonButton
              :text="$t('view_all')"
              variant="secondary"
              size="md"
          />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 mt-8 gap-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        <CommonCardsNews v-for="(card, index) in limitedNews" :key="index" :card="card"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface Props {
  news: {
    slug: string,
    title: string,
    cover_image: string,
    created_at: string,
    is_redirect: boolean,
    news_url: string
  }
}

const props = defineProps<Props>()
const limitedNews = computed(() => props.news.slice(0, 4))
</script>
<style scoped>

</style>