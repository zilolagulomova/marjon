<template>
  <section class="bg-purple linear relative overflow-x-hidden">
    <div class="container py-16">
      <CommonSectionTitleDescription :title="$t('our_trust')" class="text-center text-white" />
      <div
          class="grid grid-cols-1 sm:grid-cols-2 pt-12 md:grid-cols-3 justify-center lg:grid-cols-4 gap-7">
        <a
            v-for="item in props.data"
            :href="item?.url"
            :key="item.url"
            class="h-[160px] group hover:bg-white/20 rounded-[20px] flex-center duration-300"
        >
          <img
              :src="item?.logo"
              alt="partner"
              class="w-full h-full object-contain"
          />
        </a>
      </div>
    </div>
    <img src="/images/png/bg-pattern.png" class="absolute bottom-[5vh] w-full max-w-[1800px] left-[10vw]" alt="">
  </section>
</template>
<script setup lang="ts">
interface DataItem {
  url: string,
  logo: string
}

interface Props {
  data: DataItem[]
}

const props = defineProps<Props>()
</script>


<style scoped>
.linear {
  background: linear-gradient(180deg, #250F4F -9.12%, #190A35 104.25%);
}
</style>