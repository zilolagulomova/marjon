<template>
  <section class="contact">
    <div class="relative pt-16 border-b-8 border-green linear">
      <i class="icon-star text-[52px] text-green absolute top-3 left-[30%]"/>
      <i
          class="icon-star text-[44px] text-[#EE6350] absolute top-[20%] left-[3%]"
      />
      <i
          class="icon-star text-[36px] text-[#67C1E6] absolute top-[20%] right-[3%]"
      />
      <i
          class="icon-star text-[28px] text-[#F8CD33] absolute bottom-[20%] left-[12%]"
      />
      <i
          class="icon-star text-[20px] text-[#58DA84] absolute bottom-[26%] right-[12%]"
      />
      <div class="container !max-w-[782px] relative z-10">
        <CommonSectionTitleDescription class="text-center" :title="$t('not_found_what_you_were_looking_for')"/>
        <form @submit.prevent="submit">
          <div>
            <label for="name">Name</label>
            <input
                type="text"
                id="name"
                v-model="form.values.name"
                :class="{ 'is-invalid': form.$v.values.name.$error }"
                placeholder="Enter your name"
            >
            <span v-if="form.$v.values.name.$error">This field is required</span>
          </div>
          <div>wq
            <label for="phone">Telefon raqamingiz</label>
            <input
                type="text"
                id="phone"
                v-model="form.values.phone"
                :class="{'is-invalid': form.$v.values.phone.$error }"
                placeholder="Enter your phone number"
            >
            <div>
              <label for="text">Message</label>
              <textarea
                  id="text"
                  v-model="form.values.text"
                  :class="{ 'is-invalid': form.$v.values.text.$error }"
                  placeholder="Enter your message"
              ></textarea>
              <span v-if="form.$v.values.text.$error">This field is required</span>
            </div>
            <div>
              <input
                  type="checkbox"
                  id="checkbox"
                  v-model="form.values.checkbox"
                  :class="{ 'is-invalid': form.$v.values.checkbox.$error }"
              />
              <label for="checkbox">I agree to the terms and conditions</label>
              <span v-if="form.$v.values.checkbox.$error">You must agree</span>
            </div>
            <button type="submit" :disabled="buttonLoading">
              <span v-if="buttonLoading">Submitting...</span>
              <span v-else>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {useVuelidate} from '@vuelidate/core'
import {required, sameAs} from "@vuelidate/validators";
import {useI18n} from "vue-i18n";
import {configApi} from "~/composables/configApi";


const form = ref({
  values: {
    name: '',
    phone: '',
    text: '',
    checkbox: false,
  }
})
const rules = {
  values: {
    name: {required},
    phone: {required},
    checkbox: {required}
  }
}
const v$ = useVuelidate(rules, form.value);
const {t} = useI18n();
const buttonLoading = ref(false);
const isValidPhone = (value: string) => {
  const phoneRegex = /^[0-9]{9}$/;
  return phoneRegex.test(value.replace(/\s/g, ''));
};
const submit = async () => {
  v$.value.$touch()
  if (!v$.value.$invalid) {
    buttonLoading.value = true;
    const data = {
      full_name: form.value.name,
      phone: `+998${form.value.phone.replace(/\s/g, '')}`,
      question: form.value.text
    }
    configApi()
        .$post('common/ContactUs/', data)
        .then(response => {
          console.log('response', response)
        })
        .catch((error) => {
          console.log('error', error)
        })
  }
}

</script>


<style scoped>
.linear {
  background: linear-gradient(180deg, #fff 0%, #f6fffd 100%);
}

</style>