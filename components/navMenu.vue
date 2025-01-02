<template>
  <div class="flex gap-6 text-sm font-semibold items-center">
    <NavMenuItem
      v-for="item in home.config?.nav.menu"
      :key="item.name"
      :menu="item" />
    <NavMenuItem
      :is-lang-switcher="true"
      :lang-icon="isDark ? GlobeDark : Globe" />
  </div>
</template>

<script setup lang="ts">
import NavMenuItem from './navMenuItem.vue'
import { usePreferredDark } from '@vueuse/core'
import Globe from '~/assets/icons/globe.svg'
import GlobeDark from '~/assets/icons/globe-dark.svg'

const isDark = usePreferredDark()
const { home } = useHomeStore()
</script>
