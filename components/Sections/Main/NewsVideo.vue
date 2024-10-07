<template>
  <section class="py-16 bg-gray-200">
    <div class="container">
      <div class="flex items-center justify-between">
        <CommonSectionTitleDescription :title="$t('video_news')" :desc="$t('video_news_text')"/>
        <NuxtLink to="/video-news">
          <CommonButton
              :text="$t('view_all')"
              variant="secondary"
              size="md"
          />
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 mt-8 gap-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        <CommonCardsVideoNews v-for="(card, index) in videoNews" :key="index" :card="card"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface Props {
  videoNews: {
    slug: string,
    title: string,
    cover_image: string,
    created_at: string,
    is_redirect: boolean,
    news_url: string
  }
}

const props = defineProps<Props>()
</script>
<style scoped>

</style>