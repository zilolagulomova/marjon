<template>
  <div>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
    <CommonModal v-show="showModal" @close="showModal = false" class="absolute z-50" />
  </div>
</template>
<script setup lang="ts">
const showModal = ref(false)

</script>