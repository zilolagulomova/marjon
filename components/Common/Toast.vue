<template>
  <div
      class="relative flex items-center justify-between gap-2 pr-3 bg-white border border-red/[8%] rounded-lg overflow-hidden"
  >
    <div
        class="w-3 h-3 rounded-full -ml-1.5 absolute"
        :class="type === 'error' ? 'bg-red' : 'bg-green-100'"
    />
    <div class="flex items-center pl-3 py-4 rounded-lg">
      <div class="relative shrink-0">
        <img :src="images[type]" alt="icon" class="w-6 h-6" />
      </div>
      <div class="ml-2">
        <h2 class="text-dark font-semibold text-xs">
          {{ message }}
        </h2>
      </div>
    </div>

    <i class="icon-close text-dark-100/40 hover:text-red text-sm duration-300 cursor-pointer"></i>
  </div>
</template>

<script setup lang="ts">

interface Props {
  message: string;
  type: 'success' | 'error';
}

defineProps<Props>();
const images = computed(() => {
  return {
    success: '/images/toast/success.svg',
    error: '/images/toast/error.svg',
  }
})
</script>
<style scoped>

</style>