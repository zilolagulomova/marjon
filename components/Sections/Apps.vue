<template>
  <section class="bg-gray-100 pt-28 pb-16">
    <div class="container bg-gray-200/10 rounded-[20px] p-10 relative">
      <div class="flex items-center justify-between">
        <div>
          <i18n-t
              keypath="main_text"
              tag="h1"
              class="text-2xl md:text-[32px] font-semibold w-full max-w-[350px] text-dark leading-[130%]"
          >
            <template #each
            ><span
                class="text-green bg-green/[22%] rounded-[10px] px-2 h-[50px]"
            >{{ $t('each') }}</span
            ></template>
          </i18n-t>
          <p class="mt-4 text-sm leading-[130%] text-gray-200/80 w-full max-w-[500px]"> {{ $t('main_app_subtitle') }}</p>
          <div class="flex items-center gap-4 mt-10">
            <a
                rel="nofollow"
                class="block"
                href="https://apps.apple.com/us/app/marjon/id6474285059"
                target="_blank"
                aria-label="Download from the App Store"
            >
              <img
                  src="/images/apps/app-store.svg" alt="app store"
                  class="opacity-50 hover:opacity-100 duration-200 "
              >
            </a>
            <a
                rel="nofollow"
                class="block"
                href="https://apps.apple.com/us/app/marjon/id6474285059"
                target="_blank"
                aria-label="Download from the App Store"
            >
              <img
                  src="/images/apps/google-play.svg" alt="app store"
                  class="opacity-50 hover:opacity-100 duration-200 "
              >
            </a>

          </div>
        </div>
        <img
            src="/images/app.webp"
            alt="cargo-res"
            class="max-w max-w-[577px] hidden md:block absolute bottom-0 right-0 pointer-events-none"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

</script>

<style scoped>

</style>