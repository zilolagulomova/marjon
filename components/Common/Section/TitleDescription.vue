<template>
  <div>
    <p class="text-[40px] leading-[130%] font-bold ">{{ title }}</p>
    <p v-if="desc" class="text-gray-200 mt-1 leading-[130%]">{{ desc }}</p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  title: string,
  desc?: string
}

const props = defineProps<Props>()

</script>


<style scoped>

</style>