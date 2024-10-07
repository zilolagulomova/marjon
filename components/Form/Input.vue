<template>
  <div
      class="border py-2.5 px-3 w-full border-dark-100/10 focus-within:border-green rounded-xl duration-300 flex items-center text-dark-100/80"
      :class="{'!border-red !bg-red/5': error}">
    <slot name="prefix"></slot>
    <input
        class="w-full pl-1 outline-none bg-transparent text-dark-100/80 placeholder-dark-100/50 placeholder:font-light"
        :type="type"
        :placeholder="placeholder"
        @keyup.enter="handleEnter"
        :value="modelValue"
        @input="handleInput"
    >
    <slot name="suffix"></slot>
  </div>
</template>

<script setup lang="ts">


interface Props {
  placeholder: string,
  type: string,
  minLength: number
  maxLength: number,
  modelValue: string,
  error?: boolean,
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void,
  (e: 'enter'): void
}>()

const handleInput = (e: { target: HTMLInputElement }) => {
  emit('update:modelValue', e.target.value)
}

const handleEnter = () => {
  emit('enter')
}

</script>
<style scoped>

</style>