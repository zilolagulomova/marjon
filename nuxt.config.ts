// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    $meta: undefined,
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/i18n', '@pinia/nuxt'],
    i18n: {
        langDir: 'locales',
        baseUrl: 'https://marjon.uz/',
        locales: [
            {
                code: 'ru',
                iso: 'ru-RU',
                file: 'ru',
                name: 'Русский',
                flag: '/images/flag/russian.svg',
            },
            {
                code: 'uz',
                iso: 'uz-UZ',
                file: 'uz',
                name: "O'zbekcha",
                flag: '/images/flag/uz.svg',
            },
        ],
        lazy: true,
        useCookie: true,
        cookieKey: 'i18n_redirected',
        detectBrowserLanguage: {
            alwaysRedirect: true,
            useCookie: true,
            cookieKey: 'i18n_redirected',
            fallbackLocale: 'uz',
            cookieCrossOrigin: true,
        },
        defaultLocale: 'uz',
        strategy: 'prefix_except_default',
    },

    css: ['@/assets/css/global.css', '@/assets/icomoon/style.css'],
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'https://marjon.uicgroup.tech/api/web/v1'
        }
    },
    plugins: ['~/plugins/mask.ts']
})