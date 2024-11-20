import { createI18n } from 'vue-i18n'
import en from './lang/en'
import zh_CN from './lang/zh_cn'

const i18n = createI18n({
  legacy: false,
  locale: 'zh_CN',
  fallbackLocale: 'en',
  messages: {
    en,
    zh_CN
  }
})

export default i18n
