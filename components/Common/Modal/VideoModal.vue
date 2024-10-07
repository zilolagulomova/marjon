<template>
  <CommonModal  :show="show" @close="close">
    <div class="flex items-center justify-center rounded-2xl w-full">
      <div class="relative w-full pt-8">
        <button
            class="w-5 h-6 top-0 -right-6 z-50 absolute"
            @click="close"
        >
          <i
              class="hover:text-red-600 active:scale-95 icon-close text-sm duration-300 leading-6 text-white/80"
          ></i>
        </button>
        <div class="cursor-pointer w-full relative">
          <iframe
              v-if="videoUrl && getYoutubeId(videoUrl)"
              :src="`https://www.youtube.com/embed/${getYoutubeId(videoUrl)}`"
              class="aspect-video rounded-2xl w-full max-w-[900px]"
              width="900"
              height="507"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  </CommonModal>
</template>
<script setup lang="ts">
const show = ref(true);

interface Props {
  show?: boolean;
  videoUrl: String,
}
const close = () => {
  show.value = false;
};

defineProps<Props>();
const getYoutubeId = (url: string): string | null => {
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp)
  return match ? match[1] : null;
}
</script>


<style scoped>

</style>