<template>
  <div class="w-full h-screen text-white overflow-hidden bg-dark-100/50 flex items-center justify-center absolute z-50">
    <div>
      <div class="grid grid-cols-2 max-w-[782px] rounded-2xl bg-white">
        <div class="relative">
          <i18n-t
              keypath="auth_text"
              tag="p"
              class="text-[32px] font-bold leading-[130%] text-white absolute !-translate-x-1/2 !left-1/2 top-[24%] text-center"
          >
            <template #text>
              <span class="text-green">{{ $t('auth_text_2') }}</span>
            </template>
          </i18n-t>
          <img src="/images/banner.png" class="rounded-l-2xl" alt="banner">
        </div>
        <div class="flex flex-col">
          <div class="flex items-center justify-between w-full border-b-[1px] border-gray-100 py-4 px-6">
            <template v-if="isLogin">
              <CommonSectionTitleDescription titleClass="text-dark !text-2xl" :title="$t('enter')"/>
            </template>
            <template v-else>
              <CommonSectionTitleDescription titleClass="text-dark !text-2xl" :title="$t('registration')"/>
            </template>
            <i class="icon-close text-dark-100/40 hover:text-red text-sm duration-300 cursor-pointer"></i>
          </div>
          <Transition name="fade" mode="out-in">
            <AuthLogin @toggle="isToggle" v-if="isLogin"/>
            <AuthRegister @toggle="isToggle" v-else/>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { required } from '@vuelidate/validators'
const isLogin = ref(true)

const isToggle = () => {
  isLogin.value = !isLogin.value
}
const loginForm = useForm({

})
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>