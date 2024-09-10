<template>
  <div
      class=" bg-white h-full w-full pb-[46px] max-w-[268px] rounded-[20px]"
  >
    <div
        class="w-[100px] h-[100px] rounded-full relative overflow-hidden mx-auto border border-gray-100/90 image-shadow translate-y-[-50px]"
    >
      <img
          :src="card.avatar"
          class="w-full h-full object-cover"
          alt="comment-image"
      />
    </div>
    <div class="text-center mt-[-22px] flex flex-col items-center">
      <i class="icon-left-quote text-xl text-green"/>
      <p class="mt-3 text-xl font-bold text-dark">
        {{ card?.full_name }}
      </p>
      <p class="mt-4 w-full max-w-[226px] leading-5 text-dark/50">
        {{ card?.feedback }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">

interface Props {
  card: {
    full_name: string,
    avatar: string,
    feedback: string
  }[]
}
const props = defineProps<Props>();

</script>


<style scoped>
.image-shadow {
  box-shadow: 0 4px 32px 0 rgba(25, 10, 53, 0.16);
}
</style>