import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLangStore = defineStore('lang', () => {
  const language = ref('zh_CN')
  const { locale } = useI18n({ useScope: 'global' })
  const init = () => {
    locale.value = language.value
  }
  const changeLang = (lang: string) => {
    language.value = lang
    locale.value = lang
  }

  return {
    language,
    changeLang,
    init
  }
})
