<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { useLangStore } from './stores/lang'

const { init } = useLangStore()
init()
</script>

<template>
  <NavBar />
  <RouterView />
</template>
