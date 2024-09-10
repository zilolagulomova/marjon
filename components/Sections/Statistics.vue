<template>
  <section class="bg-purple py-12 relative overflow-hidden">
    <img src="/images/png/statistcs-bg.png" class="w-[170px] h-[320px] absolute top-5" alt="">
    <div ref="counterSection" class="container">
      <CommonSectionTitleDescription
          :title="$t('we_in_numbers')"
          class="text-left text-white"
      />
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div v-for="(item, index) in statistics" :key="index" class="relative">
            <i
                class="icon-star text-green text-[36px] absolute -right-3.5"
                :class="index % 2 === 0 ? 'max-md:-top-2.5 md:-bottom-3' : '-top-2.5'"
            />
          <div
              class="py-[25.5px] px-5 relative rounded-[20px] bg-white/10 border border-white/[24%] backdrop-blur-[20px] text-center h-full">
            <div class="flex items-center justify-center gap-1">
              <vue3-autocounter
                  v-if="isVisible"
                  class="text-[32px] leading-130 font-bold text-white"
                  :start-amount="0"
                  :end-amount="Number(item?.value)"
                  :duration="5"
                  separator=" "
                  decimal-separator="."
                  :autoinit="true"
              />
              <div class="relative">
                <img src="/public/images/svg/plus.svg" alt="plus"/>
                <i class="icon-star blur-[12px] absolute text-green top-0 left-0"></i>
              </div>
            </div>
            <p class="text-sm font-normal text-white mt-1.5">
              {{ item?.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import vue3Autocounter from 'vue3-autocounter/src/vue3-autocounter.vue'

interface Props {
  statistics: {
    description: string,
    value: number | string
  }[];
  isVisible: boolean
}

const props = defineProps<Props>();
const counterSection = ref<HTMLElement | null>(null);
const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true;
    }
  });

  if (counterSection.value) {
    observer.observe(counterSection.value);
  }
});

</script>
