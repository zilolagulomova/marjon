<template>
  <section class="bg-gray-200 py-12">
    <SectionsMainMore />
    <SectionsMainAboutCompany @click.stop="handleClick" />
  </section>
</template>
<script setup lang="ts">
const emit = defineEmits(['show-modal']);

const handleClick = (event: MouseEvent) => {
  console.log('Click event handled');
  emit('show-modal', event);
};
</script>


<style scoped>

</style>