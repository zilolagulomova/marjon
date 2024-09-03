<template>
  <div class="hero pt-32">
    <pre>{{ data }}</pre>
    <button @click="changeLanguage('uz')">O'zbekcha</button>
    <button @click="changeLanguage('ru')">Ruscha</button>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { configApi } from '~/composables/configApi'
import { useLanguageSwitcher } from '~/composables/switcherLanguage'

const { $get, currentLanguage } = configApi()
const { switchLanguage } = useLanguageSwitcher()
const data = ref<any>(null)

const fetchData = async () => {
  try {
    data.value = await $get('/common/FrontendTranslations/')
  } catch (error) {
    console.error(error)
  }
}

const changeLanguage = (lang: string) => {
  currentLanguage.value = lang // Tilni yangilash
  switchLanguage()
  fetchData() // Yangi til bilan ma'lumotlarni yuklash
}

// Komponent yuklanganda ma'lumotlarni yuklash
onMounted(() => {
  fetchData()
})
</script>

<style scoped>
/* Sizning stil qoidalaringiz */
</style>