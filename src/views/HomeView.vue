<template>
  <main>
    <h1>{{ t('home.hello') }}</h1>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
main {
  margin-top: 64px;
  h1 {
    color: var(--website-font-primary);
  }
}
</style>
