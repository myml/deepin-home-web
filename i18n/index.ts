import en from '~/i18n/lang/en'
import zh from '~/i18n/lang/zh'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    zh,
    en
  }
})
)
