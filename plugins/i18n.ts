import { createI18n } from 'vue-i18n'

const messages = {
    uz: {
        title: "O'zbekcha",
        code: 'uz',
        flag: '/images/flag/uz.svg'
    },
    ru: {
        title: "Русский",
        code: 'ru',
        flag: '/images/flag/russian.svg'
    },
}

const i18n = createI18n({
    legacy: false,
    locale: 'uz',
    fallbackLocale: 'uz',
    messages,
})

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(i18n)
})