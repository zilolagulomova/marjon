<template>
  <div>
    <CommonSectionTitleDescription class="text-center" :title="$t('we_are')" :desc="$t('we_are_text')"/>
    <div class="container bg-white relative rounded-[20px] !mt-11 p-8">
      <img src="/images/svg/shapes.svg" class="w-max h-full absolute left-0 bottom-0 pointer-event-none" alt="shapes"/>
      <img style="top: 60% !important" src="/images/png/vehicles/volvo.png"
           class="absolute max-w-[464px] lg:max-w-[464px] left-[15%] max-md:hidden !-translate-y-1/2 !top-1/2"
           alt="volvo"/>
      <img src="/images/png/vehicles/mini-truck.png"
           class="absolute max-w-[267px] lg:max-w-[267px] left-[13%] mt-10 max-md:hidden !-translate-y-1/2 !top-1/2"
           alt="mini truck"/>
      <img src="/images/png/vehicles/truck.png"
           class="absolute max-w-[225px] lg:max-w-[225px] left-[4%] max-md:hidden mt-20 !-translate-y-1/2 !top-1/2"
           alt="mini truck"/>
      <div class="w-full md:max-w-[45%] md:ml-auto relative">
        <CommonLogoDark class="max-w-[120px]"/>
        <p class="whitespace-pre-line text-sm text-dark mt-1 leading-normal">
          {{ $t('about_text_main') }}
        </p>
        <NuxtLink to="/about" class="mt-5 inline-block">
          <CommonButton
              :text="$t('more')"
              variant="secondary"
              size="md"
              iconPosition="left"
              icon="icon-arrow-right"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>


<style scoped>

</style>