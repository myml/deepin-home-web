<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLangStore } from './stores/lang'

const { init } = useLangStore()
init()
</script>

<template>
  <RouterView />
</template>
