<template>
  <section class="py-12">
    <div class="container">
      <CommonSectionTitleDescription class="text-center" :title="$t('vehicle_types')"/>
      <div class="relative">
        <button
            id="next"
            class="w-11 h-11 bg-gray/60 absolute right-0 -translate-y-1/2 top-1/2 rounded-full border border-gray text-lg text-dark-100/70 font-bold hover:border-green duration-300">
          <i class="icon-arrow"></i>
        </button>
        <div class="max-w-[782px] h-[260px] mx-auto">
          <Swiper
              v-if="showVehicle"
              space-between="10"
              class="!h-full"
              :thumbs="{swiper: thumb}"
              :initial-slide="activeItem"
              v-bind="configurations"
              @active-index-change="onChange"
          >
            <SwiperSlide v-for="(slide, index) in vehicles" :key="index">
              <img class="w-full h-full object-contain" :src="slide.image" :alt="slide.title"/>
            </SwiperSlide>
          </Swiper>
        </div>
        <button
            id="prev"
            class="w-11 h-11 bg-gray/60 rounded-full border absolute left-0 -translate-y-1/2 top-1/2 rotate-180 border-gray text-lg text-dark-100/70 font-bold hover:border-green duration-300">
          <i class="icon-arrow"></i>
        </button>
      </div>
      <div class="mt-5">
        <div class="flex-center gap-1.5 mb-6">
          <p class="text-xl text-center leading-140 font-semibold text-dark">
            {{ vehicles?.[activeItem]?.title }}
          </p>
        </div>
        <div class="mx-auto">
          <Swiper
              v-if="showVehicle"
              :slides-per-view="'auto'"
              :space-between="16"
              centered-slides
              :initial-slide="activeItem"
              class="container"
              @swiper="onInit"
          >
            <SwiperSlide
                v-for="(vehicle, index) in vehicles"
                :key="index"
                class="!w-[184px]"
            >
              <div
                  class="w-[184px] h-[58px] border border-gray rounded-lg bg-gray-100 transition-300 hover:border-green flex-center cursor-pointer"
                  :class="{
                  '!border-green active-vehicle-shadow':
                    index === activeItem,
                }"
                  @click="activeItem = index"
              >
                <img
                    :src="vehicle?.image"
                    alt="vehicle"
                    :class="{
                    grayscale: index !== activeItem,
                  }"
                    class="max-w-[90%] mx-auto transition-300 h-full w-full object-contain"
                />
              </div>
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

interface Props {
  vehicles: {
    id: number,
    title: string,
    slug: string,
    image: string,
    ordering: number,
  }
}

const props = defineProps<Props>()

const activeItem = ref(2)
const thumb = ref()
const showVehicle = ref(false)
const configurations = {
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
  grabCursor: true,
  keyboard: {enabled: true},
  modules: [Navigation, EffectFade, Thumbs]
}

function onInit(swiper: any) {
  thumb.value = swiper
}

function onChange(e: any) {
  activeItem.value = e.activeIndex
}
watch(
    () => props.vehicles?.length,
    () => {
      setTimeout(() => {
        showVehicle.value = true
      }, 400)
    },
    {
      immediate: true,
    }
)
</script>

