<template>
  <div
      class="relative"
      data-dropdown="0"
      tabindex="0"
      @focusout="handleFocusOut"
  >
    <div @click="toggleShow">
      <slot name="head"></slot>
    </div>
    <Transition name="dropdown" mode="out-in">
      <div
          v-show="showBody"
          class="absolute left-0 translate-y-full shadow border-[0.5px] !w-[124px] rounded-xl overflow-hidden -bottom-2 z-50 "
          :class="{'text-dark border-gray-200 bg-white': layout === 'orange', 'text-white bg-white/20 border-white/30' : layout === 'default'}"
      >
        <slot name="body"/>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";

interface Props {
  show?: boolean | undefined
  withTrigger?: boolean
}

const route = useRoute()
const layout = route.meta.layout
const props = withDefaults(defineProps<Props>(), {
  show: undefined,
  headClass: '',
  bodyClass: '',
})

interface Emits {
  (e: 'toggle', v: boolean): void
}

const emit = defineEmits<Emits>()

const showBody = ref(props.show ?? false)

function toggleShow() {
  if (!props.withTrigger) {
    if (props.show === undefined) {
      showBody.value = !showBody.value
    } else {
      emit('toggle', !props.show)
    }
  }
}

function handleFocusOut(e: FocusEvent) {
  emit('toggle', false)
  showBody.value = false
}

watch(
    () => props.show,
    (v) => {
      showBody.value = v
    }
)
</script>

<style scoped>
@keyframes dropdown {
  0% {
    opacity: 0;
    bottom: -12px;
  }
  100% {
    opacity: 1;
    bottom: -8px;
  }
}

.dropdown-enter-active {
  animation: dropdown 0.3s ease-in-out;
}

.dropdown-leave-active {
  animation: dropdown 0.3s ease-in-out reverse;
}

.shadow {
  box-shadow: 0 16px 30px 0 rgba(25, 10, 53, 0.12);
}
</style>
