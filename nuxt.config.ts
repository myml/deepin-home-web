// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxt/eslint',
    'nuxt-gtag',
  ],
  ssr: true,
  routeRules: {
    '/admin': { redirect: '/admin/seo' },
    '/admin/*': { ssr: false },
    '/login': { ssr: false }
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-JBPRYNBJZ7',
    loadingStrategy: 'async'
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
    vueI18n: './i18n/index.ts',
    locales: ['zh', 'en'],
    strategy: 'prefix_and_default',
    defaultLocale: 'zh',
    detectBrowserLanguage: false
  },
  nitro: {
    compressPublicAssets: true,
    devProxy: {
      "/api": {
        target: process.env.NUXT_API_BASE_URL,
        changeOrigin: true,
        prependPath: true
      }
    }
  },
  build: {
    analyze: {
      enabled: true,
      open: true,
      filename: "stats.html",
    },
  },
  css: ['~/assets/scss/base.scss', '~/assets/scss/tailwindcss.scss', '~/assets/scss/variables.scss'],
})
