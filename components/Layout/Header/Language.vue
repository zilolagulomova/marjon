<template>
  <div>
    <CommonDropdown
        :show="showDropdown"
        @click="handleDropdownToggle"
    >
      <template #head>
        <button  @click.stop="handleDropdownToggle" class="flex items-center text-gray-200 gap-2 cursor-pointer group">
          <i
              class="icon-global duration-300 group-hover:text-green"
              :class="{'text-dark': layout === 'orange', 'text-white': layout === 'default'}"
          />
          <span
              class="text-sm duration-300 font-semibold group-hover:text-green"
              :class="{'text-dark': layout === 'orange', 'text-white': layout === 'default'}"
          >
          {{ currentLang?.name }}
        </span>
          <i
              class="icon-arrow duration-300 text-xs group-hover:text-green"
              :class="[
                  {'text-dark': layout === 'orange', 'text-white': layout === 'default'},
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
              variant === 'dark' ? 'hover:bg-white/[12%]' : 'hover:bg-white/[12%]'
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
import {useRoute} from "vue-router";

interface Props {
  variant: 'default' | 'dark'
}
const route = useRoute();
const layout = computed(() => route.meta.layout);

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
