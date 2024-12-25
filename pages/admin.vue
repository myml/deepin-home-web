<template>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
})
defineI18nRoute(false)
</script>
