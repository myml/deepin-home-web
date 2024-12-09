// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: [
      '**/components/**/*.{js,ts,vue}',
      '**/pages/**/*.{js,ts,vue}',
      '**/layouts/**/*.{js,ts,vue}',
      '**/app.{js,ts,vue}',
      '**/error.{js,ts,vue}'
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/no-template-shadow': 'off',
      'vue/html-self-closing': 'off'
    }
  }
)
