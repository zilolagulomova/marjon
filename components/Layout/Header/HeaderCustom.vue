<template>
  <div :class="['container', { 'slide-fade': !show }]"
       class="container border border-white/20 rounded-xl w-full h-[12vh]">
    <div class="flex items-center justify-between">
      <ul>
        <li v-for="item in links">
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import {links} from '@/constants'

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