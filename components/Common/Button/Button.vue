<template>
  <button
      :class="['rounded-xl duration-300 active:scale-95 border border-transparent flex items-center gap-2',
      buttonClasses,
      sizeClasses,
      iconPositions,
      {'pointer-events-none': disabled}]"
      :disabled="disabled"
  >
    <span v-if="icon && iconPosition === 'right'" :class="icon"></span>
    <span>{{ text }}</span>
    <span v-if="icon && iconPosition === 'left'" :class="icon"></span>
  </button>
</template>
<script setup lang="ts">
interface ButtonProps {
  text: string,
  variant: 'primary' | 'secondary' | 'outline' | 'dark' | 'danger' | 'white',
  size?: 'sm' | 'md',
  icon?: string,
  iconPosition?: 'left' | 'right',
  disabled?: boolean
}

const props = defineProps<ButtonProps>()
console.log('iconPosition:', props.iconPosition);
const buttonClasses = computed(() => {
  const variants = {
    primary: 'bg-green text-white hover:bg-green font-normal hover:shadow-[0px_6px_30px_0px_rgba(63,242,200,0.40)]',
    secondary: 'bg-gray text-dark  hover:bg-dark/20',
    outline: 'border !border-gray text-dark hover:bg-white-100 hover:!border-dark/20',
    dark: 'bg-white/[12%] text-white hover:bg-white/[24%]',
    danger: 'bg-red text-white hover:bg-[#EB1F38]',
    white: 'bg-white border !border-gray text-dark hover:bg-white-100 hover:!border-dark/20'
  };
  return variants[props.variant]
})
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'py-2 px-6 text-sm leading-[130%]',
    md: 'py-2.5 px-8 leading-5'
  }
  return sizes[props.size || 'md']
})

const iconPositions = computed(() => {
  console.log('iconPosition value:', props.iconPosition);
  return props.iconPosition === 'right' ? 'flex-row-reverse' : '!flex-row';
});

</script>

