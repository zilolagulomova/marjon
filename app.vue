<template>
  <div class="relative">
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
    <AuthModal :show="show" @close="show = false" class="absolute top-0 z-50"/>
  </div>
</template>
<script setup lang="ts">
import AuthModal from "~/components/Common/Modal/AuthModal.vue";
const show = ref(false);
</script>
