import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLangStore = defineStore('lang', () => {
  const language = ref(sessionStorage.getItem('localeLang') || 'zh_CN')
  const { locale } = useI18n({ useScope: 'global' })
  const changeLang = (lang: string) => {
    language.value = lang
    locale.value = lang
    // 缓存用户选择的语言
    sessionStorage.setItem('localeLang', lang)
  }

  return {
    language,
    changeLang
  }
})
