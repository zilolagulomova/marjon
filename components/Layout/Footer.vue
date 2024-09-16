<template>
<section class="bg-purple pt-16 relative linear overflow-hidden">
  <img src="/images/svg/fill-bg.svg" class="absolute top-[2%] left-[10vw] w-full min-w-[1800px]" alt="pattern marjon">
  <div class="container">
    <div class="flex flex-col items-center gap-10">
      <NuxtLink to="/">
        <img src="/images/svg/Logo.svg" alt="Uic" class="w-[120px]" />
      </NuxtLink>
      <ul class="flex flex-col items-center gap-10 md:flex-row">
        <li v-for="item in links">
          <NuxtLink class="text-lg hover:text-green duration-300 cursor-pointer text-white" :to="item.path">
            {{ $t(`${item.name}`) }}
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center gap-3 border-[0.2px] border-gray-100/30 rounded-lg p-2 cursor-pointer">
        <div class="flex items-center gap-1.5 group">
          <i class="icon-phone-call text-green group-hover:text-green text-lg duration-300"></i>
          <a class="text-xs font-normal group-hover:text-green duration-300 text-white"
                    :href="`tel:${data?.phone_number}`">{{ phoneNumberFormatter(data?.phone_number) }}
          </a>
        </div>
        <div class="h-4 w-[1px] bg-gray-100/30 "></div>
        <div class="flex items-center gap-1.5 group cursor-pointer">
          <i class="icon-location text-green group-hover:text-green text-lg duration-300"></i>
          <a class="text-xs font-normal group-hover:text-green duration-300 text-white"
                    :href="map" target="_blank">{{ data?.location.name }}
          </a>
        </div>
      </div>
    </div>
    <div
        class="container py-[26px] !mt-10 border-t border-white/[12%] flex items-center justify-between relative max-sm:flex-col-reverse max-sm:flex-col gap-4"
    >
      <p class="text-xs leading-136 text-white">
        {{ $t('footer_verified') }}
      </p>
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
      <div class="flex items-center gap-2.5">
        <p class="text-xs  text-white">{{ $t('created_by') }}</p>
        <CommonLogoUIC main-color="#fff" />
      </div>
    </div>
  </div>
</section>
</template>
<script setup lang="ts">

import {links} from "~/constants";
import {phoneNumberFormatter} from "~/utils";
import {onMounted, ref, computed} from "vue";
import {configApi} from "~/composables/configApi";


const {$get} = configApi();
const data = ref(null);
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

onMounted(async () => {
  try {
    data.value = await $get("/common/AboutUs/");
  } catch (error) {
    console.error('Error:', error.message || error);
  }
});

const map = computed(() => {
  if (data.value && data.value.location) {
    const {longitude, latitude} = data.value.location;
    return `https://www.google.com/maps?q=${latitude},${longitude}`
  }
})

</script>


<style scoped>
.linear {
  background: linear-gradient(180deg, #250F4F -9.12%, #190A35 104.25%);
}
</style>