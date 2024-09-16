<template>
  <label class="text-dark text-sm">
    {{ text }}
    <slot/>
  </label>
</template>
<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<style scoped>

</style>