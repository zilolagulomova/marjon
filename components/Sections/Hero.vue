<template>
  <section class="py-24 linear md:pt-56 bg-purple overflow-hidden relative">
    <img src="/images/svg/fill-bg.svg" class="absolute top-[20vh] left-[10vw] w-full min-w-[2500px]" alt="pattern marjon">

    <div class="container flex flex-col md:flex-row items-start justify-between relative">
      <div class="lg:min-w-[50%] pl-7 mt-9 sm:mt-[140px] lg:mt-6 pb-6">
        <i18n-t
            keypath="main_text"
            tag="h1"
            class="text-2xl md:text-[40px] font-semibold text-white leading-[130%] whitespace-pre-line"
        >
          <template #each
          ><span
              class="text-green bg-green/[22%] rounded-[10px] px-2 h-[50px]"
          >{{ $t('each') }}</span
          ></template>
        </i18n-t>
        <p class="mt-6 lg:mt-10 text-base leading-[140%] font-light text-gray-200"> {{ $t('main_subtitle') }}</p>
        <img class="w-full mt-8 lg:hidden" src="/images/isuzu.webp" alt="cargo"/>
        <div class="flex items-center gap-4 mt-6 lg:mt-[70px]">
          <CommonButton
              :text="$t('book')"
              variant="primary"
              size="md"
              iconPosition="left"
              icon="icon-arrow-right"
              @click="toCalculatorSection"
          />
          <CommonButton
              :text="$t('categories')"
              variant="dark"
              size="md"
              iconPosition="left"
              icon="icon-apps"
              @click="toCategorySection"
          />
        </div>
      </div>
      <img class="w-full max-lg:hidden  pointer-events-none ml-16 max-w-[862px]" src="/images/isuzu.webp"
           alt="cargo"/>
    </div>
  </section>

</template>

<script setup lang="ts">

const toCategorySection = () => {
  const section = document.getElementById('category');
  if(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const toCalculatorSection = () => {
  const section = document.getElementById('calculator');
  if(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.linear {
  background: linear-gradient(180deg, #250F4F -9.12%, #190A35 104.25%);
}
</style>