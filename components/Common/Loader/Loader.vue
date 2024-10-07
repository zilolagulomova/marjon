<template>
  <div class="bg-purple z-[9999] w-full h-screen linear flex flex-col items-center gap-56 justify-end pb-28">
    <div class="flex flex-col items-center justify-center">
      <img src="/images/svg/Logo.svg" class="w-[120px]">
    </div>
      <div class="spinner"></div>
  </div>
</template>
<script setup lang="ts">

</script>


<style scoped>
.linear {
  background: linear-gradient(180deg, #250F4F -9.12%, #190A35 104.25%);
}

.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #59debe;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 70deg,
      #0000 71deg 90deg
  ),
  radial-gradient(
      farthest-side,
      #0000 calc(100% - 7.2px),
      #000 calc(100% - 6.4px)
  );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: spinner-mv2oco 1s infinite;
}

@keyframes spinner-mv2oco {
  to {
    transform: rotate(0.5turn);
  }
}
</style>