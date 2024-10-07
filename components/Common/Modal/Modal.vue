<template>
  <Teleport to="body">
    <div
        :class="{ '!opacity-100 !visible': show }"
        class="items-center p-3 fixed w-full h-full bg-[#17181A]/60 flex justify-center z-[100] top-0 left-0 invisible opacity-0 transition-all duration-300"
        data-modal="wrapper"
        @click="handleOuterClick"
    >
      <Transition name="modal" mode="out-in">
        <div
            v-if="show"
            class="w-max shadow-xl relative max-h-screen rounded-xl"
        >
          <button
              class="w-5 h-6 absolute top-5 right-5 shrink-0 flex items-center"
              @click="$emit('close')"
          >
            <i
                class="hover:text-red-600 active:scale-95 icon-close text-sm duration-300 leading-6 text-dark-100/40"
            ></i>
          </button>
          <slot />
          <slot name="footer" />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
interface Props {
  show?: boolean;
  modalClass?: string | string[];
  disableOuterClose?: boolean;
  bodyClass?: string | string[];
}

const props = withDefaults(defineProps<Props>(), {
  bodyClass: "",
  modalClass: "",
});

interface Emits {
  (e: "close"): void;

  (e: "outer-click"): void;
}

const animationIn = ref(false);
const emit = defineEmits<Emits>();

function handleOuterClick(e: Event) {
  const target = e.target as HTMLElement;
  if (target.dataset?.modal == "wrapper") {
    emit("outer-click");
    if (!props.disableOuterClose) {
      emit("close");
    } else {
      animationIn.value = true;
      setTimeout(() => {
        animationIn.value = false;
      }, 500);
    }
  }
}

watch(
    () => props.show,
    (val) => {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
);
onMounted(() => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !props.disableOuterClose) {
      emit("close");
    }
  });
});
</script>

<style scoped>
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-enter-active {
  animation: modal 0.3s ease-in-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in-out reverse;
}

@keyframes mobile-modal {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-modal-enter-active {
  animation: mobile-modal 0.5s ease-in-out;
}

.mobile-modal-leave-active {
  animation: mobile-modal 0.5s ease-in-out reverse;
}

.animated {
  animation: horizontal-shaking 0.4s ease-in-out;
}
</style>
