
<template>
  <div>
    <div class="w-[60px] h-[60px] rounded-xl bg-green flex items-center justify-center mt-[-40px]">
      <img :src="card?.icon" alt="icon" class="w-10 h-10"/>
    </div>
    <p class="mt-4 text-xl font-semibold text-dark">{{ card?.title }}</p>
    <p class="text-dark-100/40 mt-2">
      {{ card?.description }}
    </p>
  </div>
</template>
<script setup lang="ts">
interface Props {
  card: {
    title: string,
    description: string,
    icon: string,
  }
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>