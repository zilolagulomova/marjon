<template>
  <header
      class="fixed w-full z-20"
      :class="{ 'header-white': layout === 'orange', 'header-purple': layout === 'default' }"
  >
    <LayoutHeaderTransition class="hidden md:block " v-if="data" :data="data"/>
    <LayoutHeaderCustom @open-modal="$emit('open-modal')" />
  </header>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {configApi} from "~/composables/configApi";


const {$get} = configApi();
const data = ref(null);
const frontendTranslation = ref(null);
const route = useRoute();
const layout = computed(() => route.meta.layout);

onMounted(async () => {
  try {
    data.value = await $get("/common/AboutUs/");
    frontendTranslation.value = await $get("/common/FrontendTranslations/");
  } catch (error) {
    console.error('Error:', error.message || error);
  }
});
</script>

<style>
.header-purple {
  background: #230F4B !important;
}

.header-white {
  background: #fff !important;
}
</style>
