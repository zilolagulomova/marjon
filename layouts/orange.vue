<template>
  <div>
    <LayoutHeader layout="orange"/>
    <main>
      <slot/>
    </main>
    <LayoutFooter/>
  </div>
</template>

<script setup lang="ts">
const layout = "orange";
</script>
