<template>
  <Transition :duration="550" name="nested">
    <div v-if="show" class="outer py-5"
         :class="{ 'header-white': layout === 'orange', 'header-purple': layout === 'default' }"
    >
      <div class="container px-12 flex items-center justify-between">
        <!--  Contacts      -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 group">
            <i class="icon-phone-call text-white/20 group-hover:text-green text-lg duration-300"></i>
            <NuxtLink class="text-xs font-normal group-hover:text-green duration-300 text-white"
                      :to="data?.phone_number">{{ phoneNumberFormatter(data?.phone_number) }}
            </NuxtLink>
          </div>
          <div class="flex items-center gap-1.5 group">
            <i class="icon-location text-white/20 group-hover:text-green text-lg duration-300"></i>
            <NuxtLink class="text-xs font-normal group-hover:text-green duration-300 text-white"
                      :to="map" target="_blank">{{ data?.location.name }}
            </NuxtLink>
          </div>
        </div>
        <!--  Links      -->
        <div class="flex items-center gap-3">
          <NuxtLink target="_blank" class="" :to="data?.facebook">
            <i class="icon-facebook text-xl hover:text-green duration-300 text-white/50"></i>
          </NuxtLink>
          <NuxtLink target="_blank" class="" :to="data?.instagram">
            <i class="icon-instagram text-xl hover:text-green duration-300 text-white/50"></i>
          </NuxtLink>
          <NuxtLink target="_blank" class="" :to="data?.telegram">
            <i class="icon-telegram text-xl hover:text-green duration-300 text-white/50"></i>
          </NuxtLink>
          <NuxtLink target="_blank" class="" :to="data?.youtube">
            <i class="icon-youtube text-xl hover:text-green duration-300 text-white/50"></i>
          </NuxtLink>
        </div>
        <!--  Language Switcher button    -->
        <div class="flex items-center gap-3 relative">
          <div class="flex items-center gap-1.5 group w-full max-w-[100px]">
            <i class="icon-global text-base text-white/50 duration-300 group-hover:text-green"></i>
            <button @click="toggleSwitcher"
                    class="text-sm duration-300 leading-normal text-dark font-medium group-hover:text-green text-white">
              {{ currentLanguage }}
            </button>

            <i :class="iconClass" class="icon-arrow text-white group-hover:text-green text-[13px] duration-300"></i>
          </div>
          <Transition name="fade">
            <div v-if="showLang" @click="switchLanguage('uz')"
                 class="absolute cursor-pointer hover:bg-white/20 bg-white/10 border border-white/20 flex rounded-xl w-[120px] px-2 duration-300 justify-start text-white py-2 backdrop-blur top-7 left-0">
              <div class="flex items-center gap-1.5">
                <img :src="otherFlag" :alt="t('title')"/>
                <p class="text-xs font-semibold">
                  {{ otherLanguage }}
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from "vue";
import {phoneNumberFormatter} from '@/utils'
import {useI18n} from '~/composables/usei18n'
import { useLanguageSwitcher } from '~/composables/switcherLanguage'

const {toggleSwitcher, currentLanguage, iconClass, showLang, switchLanguage, otherFlag, otherLanguage} = useLanguageSwitcher()
const {locale, t} = useI18n()
const show = ref(true);

interface AboutUsData {
  phone_number: string,
  location: {
    name: string,
    longitude: number,
    latitude: number,
  },
  telegram: string,
  facebook: string,
  instagram: string,
  youtube: string
}

const props = defineProps<{ data: AboutUsData }>()


// Map function
const map = computed(() => {
  if (props.data && props.data.location) {
    const {longitude, latitude} = props.data.location;
    return `https://www.google.com/maps?q=${latitude},${longitude}`
  }
})

function handleScroll() {
  const scrollThreshold = 10;
  if (window.scrollY > scrollThreshold) {
    show.value = false;
  } else {
    show.value = true;
  }
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});


</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-from, .fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.header-purple {
  background: #230F4B !important;
}

.header-white {
  background: #fff !important;
}

.outer {
  background: #230F4B;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.06) 100%);
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.3s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-active .inner {
  transition-delay: 0.3s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateY(-30px);

  opacity: 0.001;
}
</style>
