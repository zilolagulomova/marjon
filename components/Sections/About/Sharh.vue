<template>
  <div class="py-[18px] linear flex items-center justify-center max-sm:flex-col gap-4">
    <i18n-t
        keypath="rating_text"
        tag="p"
        class="text-sm text-white flex gap-2"
    >
      <template #rate>
        <div class="flex items-center gap-[3px]">
          <i class="icon-star text-[12px] bg-white/10 p-0.5 rounded" v-for="i in 5" :key="i" />
        </div>
      </template>
    </i18n-t>
    <img src="/images/svg/sharh.svg" alt="sharh"/>
  </div>
</template>
<script setup lang="ts">

</script>



<style scoped>
.linear {
  background: linear-gradient(90deg, #4489f7 3.61%, #022f5e 107.57%);
}
</style>