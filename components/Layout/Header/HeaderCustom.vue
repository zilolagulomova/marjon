<template>
  <div
      class="container p-6 lg:rounded-[20px] border-b lg:border border-white/[12%]">
    <div class="flex items-center justify-between">
      <NuxtLink to="/">
        <CommonLogo/>
      </NuxtLink>
      <ul class="flex items-center gap-7">
        <li v-for="item in links">
          <NuxtLink
              v-if="item.path === '/category' || item.path === '/calculator' || item.path === '/contact'"
              @click.prevent="navigatedToCategory(item)"
              :class="{'text-dark' : layout === 'orange', 'text-white' : layout === 'default', 'active': route.path === item.path}"
              class="text-sm hover:text-green duration-300 cursor-pointer"
          >
            {{ $t(`${item.name}`) }}
          </NuxtLink>
          <NuxtLink
              v-else
              :class="{'text-dark' : layout === 'orange', 'text-white' : layout === 'default', 'active': route.path === item.path}"
              class="text-sm hover:text-green duration-300 cursor-pointer" :to="item.path"
          >
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
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";


useHead({
  title: 'Marjon'
})
const show = ref(true);
const route = useRoute();
const router = useRouter();
const layout = route.meta.layout;

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
const navigatedToCategory = (item: {path: string}) => {
  let sectionId = '';

  if(item.path === '/category') {
    sectionId = 'category'
  } else if(item.path === '/calculator') {
    sectionId = 'calculator'
  } else if(item.path === '/contact') {
    sectionId = 'contact'
  }
  router.push('/').then(() => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if(section) {
        section.scrollIntoView({behavior: "smooth"})
      }
    }, 500)
  })
}
</script>

<style scoped>
.container {
  transition: ease-in 0.8s;
}

.slide-fade {
  transition: ease-in 0.8s;
  transform: translateY(0px);
}

.active {
  color: #59DEBE;
}
</style>