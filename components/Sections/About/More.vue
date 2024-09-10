<template>
  <div class="py-16 relative">
      <div >
        <img style="top: 60% !important" src="/images/png/vehicles/volvo.png"
             class="absolute w-full max-w-[464px] lg:max-w-[754px] -left-5 max-md:hidden !-translate-y-1/2 !top-1/2"
             alt="volvo"/>
        <img src="/images/png/vehicles/mini-truck.png"
             class="absolute w-full max-w-[267px] lg:max-w-[453px] -left-5 mt-10 max-md:hidden !-translate-y-1/2 !top-1/2"
             alt="mini truck"/>
      </div>
    <div class="container w-full relative p-8">
      <div class="lg:max-w-[50%] pl-7 ml-auto sm:mt-[140px] lg:mt-6 pb-6 relative">
        <p class="whitespace-pre-line text-lg text-dark mt-1 leading-normal">
          {{ $t('about_text_main') }}
        </p>
        <NuxtLink to="/about" class="mt-5 inline-block">
          <CommonButton
              :text="$t('calculator')"
              variant="primary"
              size="md"
              iconPosition="left"
              icon="icon-arrow"
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