<template>
  <div class="nav-menu">
    <NavMenuItem v-for="item in menu" :key="item.name" :menu="item" />
    <NavMenuItem
      :is-lang-switcher="true"
      :lang-icon="isDark ? GlobeDark : GlobeLight" />
  </div>
</template>

<script setup lang="ts">
import MenuZh from '@/assets/nav/menu_zh.json'
import MenuEn from '@/assets/nav/menu_en.json'
import NavMenuItem from './navMenuItem.vue'
import GlobeLight from '~/assets/icons/globe-light.svg'
import GlobeDark from '~/assets/icons/globe-dark.svg'
import type { Menu } from './menu'
import { computed } from 'vue'
import { usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()
const langStore = useLangStore()
const menu = computed(() => {
  const menu = langStore.language === 'zh_CN' ? MenuZh.menu : MenuEn.menu
  return menu as Menu[]
})
</script>

<style lang="scss" scoped>
.nav-menu {
  display: flex;
  gap: 24px;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
}
</style>
