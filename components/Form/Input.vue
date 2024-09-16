<template>
  <div :class="{'border-green' : isFocused, ' border-dark-100/10' : !isFocused}"
       class="border py-2.5 px-3 w-full rounded-xl duration-300 flex items-center text-dark-100/80">
    <slot name="prefix"></slot>
    <input
        class="w-full pl-1 outline-none text-dark-100/80 placeholder-dark-100/50 placeholder:font-light"
        :type="type"
        :placeholder="placeholder"
        @focus="isFocused = true"
        @blur="isFocused = false"
    >
    <slot name="suffix"></slot>
  </div>
</template>

<script setup lang="ts">

const isFocused = ref(false)
const inputValue = ref<string>('');

interface Props {
  placeholder: string,
  type: string,
  minLength: number
  maxLength: number,
}

 defineProps<Props>()

</script>
<style scoped>
.input-field:focus {
  border-color: #59debe;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>