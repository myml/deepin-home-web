<template>
  <main>
    <h1>{{ t('home.hello') }}</h1>
    <h2>PR 自动化测试</h2>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
