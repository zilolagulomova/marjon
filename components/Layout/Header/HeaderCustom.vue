<template>
  <div
      class="container p-6 lg:rounded-[20px] border-b lg:border border-white/[12%]">
    <div class="flex items-center justify-between">
      <NuxtLink to="/">
        <CommonLogo/>
      </NuxtLink>
      <ul class="flex items-center gap-7">
        <li v-for="item in links">
          <NuxtLink class="text-sm hover:text-green duration-300 cursor-pointer text-white" :to="item.path">
            {{ $t(`${item.name}`) }}
          </NuxtLink>
        </li>
      </ul>
      <CommonButton
          :text="$t('enter')"
          variant="primary"
          size="md"
          iconPosition="left"
          icon="icon-enter"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import {links} from '@/constants'

useHead({
  title: 'Marjon'
})
const show = ref(true);


function handleScroll() {
  const scrollThreshold = 10;
  show.value = window.scrollY < scrollThreshold;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.container {
  transition: ease-in 0.8s;
}

.slide-fade {
  transition: ease-in 0.8s;
  transform: translateY(0px);
}
</style>