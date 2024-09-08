<template>
  <Transition :duration="550" name="nested">
    <div v-if="show" class="outer py-5"
         :class="{ 'header-white': layout === 'orange', 'header-purple': layout === 'default' }"
    >
      <div class="container px-12 flex items-center justify-between">
        <!--  Contacts      -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5 group">
            <i class="icon-phone-call text-gray-200 group-hover:text-green text-lg duration-300"></i>
            <NuxtLink class="text-xs font-normal group-hover:text-green duration-300 text-white"
                      :to="data?.phone_number">{{ phoneNumberFormatter(data?.phone_number) }}
            </NuxtLink>
          </div>
          <div class="flex items-center gap-1.5 group">
            <i class="icon-location text-gray-200 group-hover:text-green text-lg duration-300"></i>
            <NuxtLink class="text-xs font-normal group-hover:text-green duration-300 text-white"
                      :to="map" target="_blank">{{ data?.location.name }}
            </NuxtLink>
          </div>
        </div>
        <!--  Links      -->
        <div class="flex items-center gap-3">
          <NuxtLink target="_blank" class="" :to="data?.facebook">
            <i class="icon-facebook text-xl hover:text-green duration-300 text-gray-200"></i>
          </NuxtLink>
          <NuxtLink target="_blank" class="" :to="data?.instagram">
            <i class="icon-instagram text-xl hover:text-green duration-300 text-gray-200"></i>
          </NuxtLink>
          <NuxtLink target="_blank" class="" :to="data?.telegram">
            <i class="icon-telegram text-xl hover:text-green duration-300 text-gray-200"></i>
          </NuxtLink>
          <NuxtLink target="_blank" class="" :to="data?.youtube">
            <i class="icon-youtube text-xl hover:text-green duration-300 text-gray-200"></i>
          </NuxtLink>
        </div>
        <!--  Language Switcher button    -->
        <LayoutHeaderLanguage />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from "vue";
import {phoneNumberFormatter} from '@/utils'
import {useI18n} from '~/composables/usei18n'
const route = useRoute();
const layout = computed(() => route.meta.layout);


const {t} = useI18n()
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
