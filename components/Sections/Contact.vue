<template>
  <section>
    <div class="relative pt-16 border-b-8 border-green linear">
      <i class="icon-star text-[52px] text-green absolute top-3 left-[30%]" />
      <i
          class="icon-star text-[44px] text-[#EE6350] absolute top-[20%] left-[3%]"
      />
      <i
          class="icon-star text-[36px] text-[#67C1E6] absolute top-[20%] right-[3%]"
      />
      <i
          class="icon-star text-[28px] text-[#F8CD33] absolute bottom-[20%] left-[12%]"
      />
      <i
          class="icon-star text-[20px] text-[#58DA84] absolute bottom-[26%] right-[12%]"
      />
    <div class="container !max-w-[782px] relative z-10">
      <CommonSectionTitleDescription class="text-center" :title="$t('not_found_what_you_were_looking_for')" />
    </div>
    </div>
  </section>
</template>
<script setup lang="ts">

</script>


<style scoped>
.linear {
  background: linear-gradient(180deg, #fff 0%, #f6fffd 100%);
}

</style>