<template>
  <div>
    <p :class="titleClass" class="text-[40px] leading-[130%] font-bold">{{ title }}</p>
    <p v-if="desc" :class="descClass" class="text-gray-200 mt-1 leading-[130%]">{{ desc }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string,
  desc?: string,
  titleClass?: string,
  descClass?: string,
}

const props = defineProps<Props>()

</script>


<style scoped>

</style>