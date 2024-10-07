<template>
  <div class="flex flex-col h-full justify-between p-6 gap-5">
    <div></div>
    <div>
      <FormLabel :text="$t('phone_number')">
        <ClientOnly>
          <FormInput
              placeholder="000-00-00"
              type="text"
              v-mask="['## ### ## ##']"
              v-model="form.values.phone"
              :error="form.$v.value.phone?.$error"
              @keydown.enter="submitLogin()"
          >
            <template #prefix>
              +998
            </template>
          </FormInput>
        </ClientOnly>
      </FormLabel>
    </div>
    <div>
      <CommonButton @click="submitLogin()" :text="$t('enter')" class="w-full " variant="primary"/>
      <CommonButton @click="$emit('register')" :text="$t('registration')" class="w-full mt-3.5" variant="secondary"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { TForm } from '~/composables/configForm'

interface Props {
  form: TForm<any>
  loading?: boolean
  step?: string
}

const props = defineProps<Props>()
const { form } = unref(props)
const emit = defineEmits(['register', 'submitLogin'])
const buttonLoading = ref(false)
const { t } = useI18n()
function submitLogin() {
  console.log(form.values)
  form.$v.value.$touch()
  buttonLoading.value = true
  if (!form.$v.value.$invalid) {
    configApi()
        .$post('/users/Registration/SmsVerification/Entrypoint/', {
            phone: '+998' + form.values.phone.replaceAll(' ', ''),
        })
        .then((res) => {
          emit(
              'submitLogin',
              `+998${form.values.phone.replaceAll(' ', '')}`,
              `${res.session}`
          )
          console.log(emit)
        })
        .finally(() => {
          buttonLoading.value = false
        })
  }
}
</script>


<style scoped>

</style>