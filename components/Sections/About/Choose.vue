<template>
  <section class="py-8 md:py-16 bg-white">
    <div class="container">
      <CommonSectionTitleDescription class="text-center" :title="$t('why_us')" :desc="$t('why_us_text')"/>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-7 pt-16">
        <CommonCardsChoose  v-for="(card, index) in data" :key="index" :card="card" class="bg-gray-100 rounded-[20px] p-4" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
interface Props {
  data: {
    title: string,
    description: string,
    icon: string,
  }
}

const props = defineProps<Props>()
</script>


<style scoped>

</style>