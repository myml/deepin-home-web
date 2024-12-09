import en from '~/i18n/lang/en'
import zh_CN from '~/i18n/lang/zh_cn'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh_CN',
  fallbackLocale: 'en',
  messages: {
    en,
    zh_CN
  }
}))
