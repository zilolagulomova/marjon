<template>
  <section class="py-8 md:py-16 bg-gray-200">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="w-full h-full max-w-[448px] flex flex-col justify-center">
          <CommonSectionTitleDescription class="text-center sm:text-start" :title="$t('comments_title')"/>
          <div class="flex items-center justify-center sm:justify-start gap-5 relative pt-10">
            <button
                id="prev"
                class="w-11 h-11 bg-green shadow-button rounded-full flex flex-col items-center justify-center rotate-180 text-lg text-white hover:bg-white hover:text-dark duration-300">
              <i class="icon-arrow"></i>
            </button>
            <button
                id="next"
                class="w-11 h-11 bg-green flex flex-col items-center justify-center rounded-full text-white  hover:text-dark hover:bg-white shadow-button duration-300">
              <i class="icon-arrow"></i>
            </button>
          </div>
        </div>
        <div class="">
          <Swiper
              v-if="showVehicle"
              space-between="20"
              class="h-full"
              v-bind="configurations"
          >
            <SwiperSlide v-for="(card, index) in clients" :key="index" class=" py-[60px]">
              <CommonCardsClients :card="card" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {EffectFade, Navigation, Thumbs} from 'swiper/modules'
import "swiper/css"

const showVehicle = ref(false)
const configurations = {
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
  grabCursor: true,
  slidesPerView: 2,
  keyboard: {enabled: true},
  modules: [Navigation, EffectFade]
}

interface Props {
  clients: {
    full_name: string,
    avatar: string,
    feedback: string
  }[]
}

const props = defineProps<Props>();

onMounted(() => {
  showVehicle.value = true;
});
</script>


<style scoped>
.shadow-button {
  box-shadow: 0 4px 24px 0 rgba(89, 222, 190, 0.36);
}
</style>