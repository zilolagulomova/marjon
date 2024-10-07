<template>
  <VideoModal :show="show" @close="show = false" :videoUrl="data?.video_url" class="absolute top-0 z-50"/>
  <div class="container flex flex-col md:flex-row items-center !py-16 gap-6">
    <div class="w-full max-w-[580px]">
      <CommonSectionTitleDescription :title="$t(data?.title || '')"
                                     :desc="$t(data?.short_description || '')"/>
      <p class="description pt-5" v-html="$t(data?.description || '')"></p>
    </div>
    <div @click="show = true" class="cursor-pointer md:w-1/2 w-full relative">
      <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" src="/images/svg/youtube.svg" alt="">
      <img :src="youtubeThumbnail" class="aspect-video rounded-2xl w-full h-full object-cover" alt="">
      <div class="absolute w-full h-full top-0 left-0 z-1 bg-dark-100 rounded-2xl opacity-50"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {configApi} from "~/composables/configApi";
import AuthModal from "~/components/Common/Modal/AuthModal.vue";
import VideoModal from "~/components/Common/Modal/VideoModal.vue";

const show = ref(false);
const {$get} = configApi()
const data = ref<any>(null)
const youtubeThumbnail = ref<string | null>(null)
const getYoutubeId = (url: string): string | null => {
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp)
  return match ? match[1] : null;
}
onMounted(async () => {
  try {
    data.value = await $get('/common/AboutCompanyAPI/')
    if(data.value?.video_url) {
      const videoId = await getYoutubeId(data.value?.video_url)
      if(videoId) {
        youtubeThumbnail.value = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      }
    }
  } catch (e) {
    console.error(e)
  }
})
</script>


<style>
.description p {
  color: #190a35;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 5px;
}

</style>