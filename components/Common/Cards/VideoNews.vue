<template>
  <NuxtLinkLocale
      :to="`/video-news/${card?.slug}`"
      class="bg-white rounded-2xl hover:shadow-2xl relative overflow-hidden flex flex-col border border-gray hover:border-green duration-300"
  >
    <div class="aspect-video max-h-[150px] relative shrink-0">
    <div class="absolute w-full h-full inset-0 rounded-2xl bg-dark-100/50">
      <i class="icon-play text-white text-4xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></i>
    </div>
      <img
          :src="card?.cover_image"
          alt="news"
          class="w-full h-full object-cover rounded-b-2xl"
      />
    </div>
    <div class="p-4 flex flex-col h-full justify-between items-start gap-3">
      <p class="text-base font-semibold text-dark line-clamp-3">
        {{ card?.title }}
      </p>
      <p
          class=" text-dark/50 py-1 px-2 border border-gray rounded"
      >
        {{ card?.created_at }}
      </p>
    </div>
  </NuxtLinkLocale>
</template>
<script setup lang="ts">

interface Props {
  card: {
    slug: string,
    title: string,
    cover_image: string,
    created_at: string,
    is_redirect: boolean,
    news_url: string
  }
}


const props = defineProps<Props>()
console.log(props.card)

</script>

<style scoped>

</style>