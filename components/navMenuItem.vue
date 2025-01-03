<template>
  <div class="menu-item">
    <template v-if="!isLangSwitcher && menu && menu.children">
      <a v-if="!menu.children.length" :href="menu.url" v-text="menu.name" />
      <span v-else v-text="menu.name" />

      <!-- 下拉菜单 -->
      <div
        v-if="menu.children.length"
        ref="dropdown"
        class="dropdown"
        :class="{ 'allow-overflow': allowOverflow }">
        <div class="dropdown-wrap">
          <div
            v-for="child in menu.children"
            :key="child.name"
            class="dropdown-menu">
            <a
              v-if="child.children && !child.children.length"
              :href="child.url"
              v-text="child.name" />
            <span v-else v-text="child.name" />
            <img
              v-if="child.children && child.children.length"
              src="~/assets/icons/chevron-right.svg" />
            <!-- 二级子菜单 -->
            <div v-if="child.children && child.children.length" class="submenu">
              <div class="submenu-wrap">
                <div
                  v-for="subChild in child.children"
                  :key="subChild.name"
                  class="submenu-item">
                  <a :href="subChild.url" v-text="subChild.name" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <ClientOnly>
        <img :src="langIcon || ''" />
      </ClientOnly>
      <div ref="dropdown" class="dropdown">
        <div class="dropdown-wrap">
          <div class="dropdown-menu">
            <NuxtLink to="/">中文（简体）</NuxtLink>
          </div>
          <div class="dropdown-menu">
            <NuxtLink to="/en">English</NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Menu } from '~/api/model'

const { menu } = defineProps<{
  menu?: Menu
  isLangSwitcher?: boolean
  langIcon?: string
}>()

const allowOverflow = ref(false)

// 监听下拉菜单的hover状态
let timer: ReturnType<typeof setTimeout> | null
const handleOverflow = (isHovered: boolean) => {
  if (isHovered) {
    // 菜单展开后允许overflow
    timer = setTimeout(() => {
      allowOverflow.value = true
    }, 600) // 与transition时间相匹配
  } else {
    // 菜单收起时立即恢复overflow:hidden
    clearTimeout(timer || 0)
    allowOverflow.value = false
  }
}

// 观察.menu-item的hover状态
const dropdown = ref<HTMLElement | null>(null)
watch(
  () => dropdown.value,
  el => {
    if (!el) return

    const menuItem = el.parentElement
    if (menuItem) {
      menuItem.addEventListener('mouseenter', () => handleOverflow(true))
      menuItem.addEventListener('mouseleave', () => handleOverflow(false))
    }
  }
)
</script>

<style lang="scss" scoped>
.menu-item {
  position: relative;
  transition: color 0.6s;
  display: flex;
  align-items: center;

  > img {
    width: 19px;
    height: 19px;
  }

  &:hover {
    > a,
    > span {
      color: var(--website-font-active);
    }

    .dropdown {
      visibility: visible;

      .dropdown-wrap {
        transform: translateY(0);
      }
    }
  }

  a,
  span {
    color: var(--website-font-primary);
    cursor: pointer;
    user-select: none;
    text-wrap: nowrap;
  }

  .dropdown {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 132px;
    visibility: hidden;
    z-index: 999;
    overflow: hidden;
    color: var(--website-font-primary);

    &.allow-overflow {
      overflow: visible;
    }

    .dropdown-wrap {
      margin-top: 10px;
      background-color: var(--website-layer-card-background);
      border-radius: 6px;
      padding: 15px 16px;
      display: flex;
      flex-direction: column;
      transform: translateY(-100%);
      gap: 14px;
      overflow: visible;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

      @media (prefers-color-scheme: dark) {
        border: 1px solid var(--dropmenu-border, #2b2b2b);
      }

      .dropdown-menu {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        font-weight: 500;

        img {
          height: 12px;
        }

        &:hover {
          > a,
          > span {
            color: var(--website-font-active);
          }

          .submenu {
            visibility: visible;

            .submenu-wrap {
              transform: translateY(0);
            }
          }
        }

        .submenu {
          position: absolute;
          top: -14px;
          left: 100%;
          min-width: 132px;
          visibility: hidden;
          overflow: hidden;
          z-index: 9999;

          .submenu-wrap {
            margin-left: 5px;
            background-color: var(--website-layer-card-background);
            border-radius: 6px;
            padding: 15px 16px;
            display: flex;
            flex-direction: column;
            gap: 14px;
            white-space: nowrap;
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
            transform: translateY(-100%);
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

            .submenu-item {
              &:hover {
                a {
                  color: var(--website-font-active);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
