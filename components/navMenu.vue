<template>
  <div class="flex gap-6 text-sm font-semibold items-center">
    <NavMenuItem v-for="item in menu" :key="item.name" :menu="item" />
    <NavMenuItem
      :is-lang-switcher="true"
      :lang-icon="isDark ? GlobeDark : Globe" />
  </div>
</template>

<script setup lang="ts">
import MenuZh from '@/assets/nav/menu_zh.json'
import MenuEn from '@/assets/nav/menu_en.json'
import NavMenuItem from './navMenuItem.vue'
import type { Menu } from './menu'
import { computed } from 'vue'
import { usePreferredDark } from '@vueuse/core'
import Globe from '~/assets/icons/globe.svg'
import GlobeDark from '~/assets/icons/globe-dark.svg'

const isDark = usePreferredDark()
const { locale } = useI18n()
const menu = computed(() => {
  const menu = locale.value == 'zh' ? MenuZh.menu : MenuEn.menu
  return menu as Menu[]
})
</script>
