import {ref, computed} from 'vue'
import {useI18n} from '~/composables/usei18n'


export const useLanguageSwitcher = () => {
    const {locale, t} = useI18n()
    const showLang = ref(false)

    const currentLanguage = computed(() => t('title'))
    const otherLanguage = computed(() => {
        return locale.value === 'uz' ? 'Русский' : "O'zbekcha"
    })
    const otherFlag = computed(() => {
        return locale.value === 'uz' ? '/images/flag/russian.svg' : '/images/flag/uz.svg'
    })

    const switchLanguage = (lang: string) => {
        // Til kodlarining to'g'riligini tekshiring
        if (lang === 'uz' || lang === 'ru') {
            locale.value = lang
            showLang.value = false
        } else {
            console.error(`Til kodining noto'g'ri qiymati: ${lang}`)
        }
    }


    const toggleSwitcher = () => {
        showLang.value = !showLang.value
    }

    const iconClass = computed(() => {
        return showLang.value ? '-rotate-90' : 'rotate-90'
    })

    return {
        showLang,
        currentLanguage,
        otherLanguage,
        otherFlag,
        switchLanguage,
        toggleSwitcher,
        iconClass
    }
}