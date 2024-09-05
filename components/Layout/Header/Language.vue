<template>
  <div class="dropwdown-container">
    <CommonDropdown
        :show="showDropdown"
        :body-class="[
      '!w-[124px] border rounded-xl',
      variant === 'dark'
        ? 'bg-white/[12%] backdrop-blur-[25px] border-white/[12%]'
        : 'border-gray-250 bg-white',
    ]"
        @click="handleDropdownToggle"
    >
      <template #head>
        <button  @click.stop="handleDropdownToggle" class="flex items-center text-gray-100 gap-1 cursor-pointer group">
          <i
              class="icon-global duration-300 group-hover:text-green"
          />
          <span
              class="text-sm duration-300 font-semibold group-hover:text-green"
              :class="variant === 'dark' ? 'text-white' : 'text-dark'"
          >
          {{ currentLang?.name }}
        </span>
          <i
              class="icon-arrow duration-300 text-sm group-hover:text-green"
              :class="[
            { '-rotate-90': showDropdown },
            { 'rotate-90': !showDropdown }
          ]"
          ></i>
        </button>
      </template>
      <template #body>
        <div
            v-for="(lang, index) in availableLocales"
            :key="index"
            class="w-full"
        >
          <NuxtLink :to="switchLocalePath(lang.code)">
            <div
                class="flex items-center justify-between gap-4 py-2 px-2 cursor-pointer duration-300"
                :class="
              variant === 'dark' ? 'hover:bg-white/[12%]' : 'hover:bg-white-100'
            "
                @click="onChangeLocale(lang?.code)"
            >
              <div class="flex items-center gap-1">
                <NuxtImg :src="lang?.flag" class="w-5" alt="flag" />
                <span
                    class="text-xs font-semibold"
                >
                {{ lang.name }}
              </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </template>
    </CommonDropdown>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  variant: 'default' | 'dark'
}

defineProps<Props>()

const { locale, locales } = useI18n()
const { changeLocale } = useLanguageSwitcher()

const switchLocalePath = useSwitchLocalePath()

const showDropdown = ref(false)

const availableLocales = computed(() => {
  return locales?.value.filter((i) => i.code !== locale.value)
})
const currentLang = computed(() => {
  return locales?.value.find((i) => i.code === locale.value)
})

function handleDropdownToggle() {
  showDropdown.value = !showDropdown.value
}
function handleClickOutside(event) {
  if (!event.target.closest('.dropdown-container')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
const onChangeLocale = (code: string) => {
  showDropdown.value = false
  changeLocale(code)
}
</script>
