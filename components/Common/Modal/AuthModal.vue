<template>
  <CommonModal :show="show" @close="close">
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
        <img
            v-if="useI18n().locale.value === 'ru'"
            src="/images/banner-ru.png"
            class="rounded-l-2xl"
            alt="truck"
        />
        <img
            v-else-if="useI18n().locale.value === 'uz'"
            class="rounded-l-2xl"
            src="/images/banner.png"
            alt="truck"
        />
      </div>
      <div class="flex flex-col">
        <div class="flex items-center justify-between w-full border-b-[1px] border-gray-200 py-4 px-6">
          <CommonSectionTitleDescription titleClass="text-dark !text-2xl"
                                         :title="$t(page === 'login' ? 'enter' : page === 'confirm' ? 'auth_confirm' : 'registration')"/>
          <button>
            <i @click="close"
               class="icon-close hidden text-dark-100/40 hover:text-red text-sm duration-300 cursor-pointer"></i>
          </button>
        </div>
        <Transition name="fade" mode="out-in">
          <AuthLogin
              @register="registerFunc"
              v-if="page === 'login'"
              :form="loginForm"
              @submit-login="submitLogin"
          />
          <AuthRegister v-else-if="page === 'register'"/>
          <AuthConfirm
              v-else
              :value="phoneNumberFormatter(phoneValue)"
              :error="otpError"
              @change="otpError = false"
              @submit="checkConfirm"
              @login="page = back"
              @resend="sendCode(phoneValue.replaceAll(' ', ''))"
          />
        </Transition>
      </div>
    </div>
  </CommonModal>
</template>
<script setup lang="ts">
import {required} from '@vuelidate/validators'
import {isValidPhone} from "~/utils";
import {useErrorHandling} from "~/composables/useHandleError";
import {useI18n} from "vue-i18n";
import {useAuthStore} from "~/store/auth";

const show = ref(false);
const page = ref<'login' | 'register' | 'confirm'>('login')
const back = ref<'login' | 'register'>('login')
const session = ref('')
const phoneValue = ref('')
const formType = ref<'login' | 'register'>('login')
const authStore = useAuthStore()
const otpError = ref(false)
const close = () => {
  show.value = false;
};


const {handleError} = useErrorHandling()
const loginForm = useForm(
    {
      phone: '',
    },
    {
      phone: {
        required,
        isValidPhone,
      },
    }
)
const registerForm = useForm(
    {
      name: '',
      title: '',
      activity: '',
      phone: '',
    },
    {
      name: {
        required,
      },
      title: {
        required,
      },
      activity: {
        required,
      },
      phone: {
        required,
        isValidPhone,
      },
    }
)


function sendCode(phone: string, type: 'login' | 'register') {
  formType.value = type
  configApi()
      .$post('users/Registration/SmsVerification/Entrypoint/Register', phone)
      .then((res: { session: string }) => {
        session.value = res?.session
        phoneValue.value = phone
        console.log(phoneValue.value)
        page.value = 'confirm'
      })
      .catch((err) => {
        handleError(err)
      })
}


function submitLogin(phone: string, sessions: string) {
  page.value = 'confirm'
  session.value = sessions
}

const loginFunc = () => {
  page.value = 'login'
}
const registerFunc = () => {
  page.value = 'confirm'
}

function login(otp: string) {
  configApi()
      .$post('users/LoginWeb/', {
        phone_number: phoneValue.value,
        code: otp,
        session: session.value,
      })
      .then(async (res: any) => {
        await authStore.setTokens(res)
        await authStore.getUser()
        authStore.showAuth = false
        page.value = 'login'
      })
      .catch((err) => {
        otpError.value = true
        handleError(err)
      })
}

function register(otp: string) {

  const data = {
    full_name: registerForm.values.name,
    company_name: registerForm.values.title,
    phone_number: phoneValue.value,
    activity_type: registerForm.values.activity,
    code: otp,
    session: session.value,
  }

  configApi()
      .$post('users/RegistrationWeb/', {
        body: data,
      })
      .then(async (res: any) => {
        await authStore.setTokens(res?.token)
        await authStore.getUser()
        authStore.showAuth = false
        page.value = 'login'
      })
      .catch((err) => {
        otpError.value = true
        handleError(err)
      })
}

function checkConfirm(otp: string) {
  if (formType.value === 'login') {
    login(otp)
  } else {
    register(otp)
  }
}
</script>


<style scoped>

.slide-down-enter-active, .slide-down-leave-active {
  transition: all 0.5s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>