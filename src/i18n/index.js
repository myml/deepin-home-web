import { createI18n } from 'vue-i18n'
import en from './lang/en'
import zh from './lang/zh-cn'

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

export default i18n
