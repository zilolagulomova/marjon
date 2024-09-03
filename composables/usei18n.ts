import { useI18n as useVueI18n } from 'vue-i18n'

export const useI18n = () => {
    const { locale, t } = useVueI18n()

    const switchLanguage = () => {
        locale.value = locale.value === 'uz' ? 'ru' : 'uz'
    }

    return {
        locale,
        t,
        switchLanguage,
    }
}