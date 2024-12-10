// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@element-plus/nuxt', '@nuxt/eslint', 'nuxt-gtag'],
  ssr: true,
  routeRules: {
    '/': { prerender: true },
    '/admin': { redirect: '/admin/seo' },
    '/admin/*': { ssr: false },
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-JBPRYNBJZ7'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  i18n: {
    vueI18n: '~/i18n/index.ts'
  },
  css: ['~/assets/scss/base.scss', '~/assets/scss/tailwindcss.scss', '~/assets/scss/variables.scss'],
})
