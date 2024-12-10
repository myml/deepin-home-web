import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLangStore = defineStore('lang', () => {
  const language = ref<string>('zh_CN')
  const { locale } = useI18n({ useScope: 'global' })
  const init = () => {
    language.value = localStorage.getItem('lang') || 'zh_CN'
    locale.value = language.value
  }
  const changeLang = (lang: string) => {
    language.value = lang
    locale.value = lang
    localStorage.setItem('lang', lang)
  }

  return {
    language,
    changeLang,
    init
  }
})
