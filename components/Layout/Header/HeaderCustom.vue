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
          @click="show = true"
          :text="$t('enter')"
          variant="primary"
          size="md"
          iconPosition="left"
          icon="icon-enter"
      />
    </div>
  </div>
  <AuthModal :show="show" @close="show = false" class="absolute top-0 z-50"/>

</template>

<script setup lang="ts">
import {links} from '@/constants'
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";
import AuthModal from "~/components/Common/Modal/AuthModal.vue";


useHead({
  title: 'Marjon'
})
const show = ref(false);
const route = useRoute();
const router = useRouter();
const layout = route.meta.layout;

const navigatedToCategory = (item: { path: string }) => {
  let sectionId = '';

  if (item.path === '/category') {
    sectionId = 'category'
  } else if (item.path === '/calculator') {
    sectionId = 'calculator'
  } else if (item.path === '/contact') {
    sectionId = 'contact'
  }
  router.push('/').then(() => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
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