<template>
  <nav class="nav">
    <div class="nav-wrap">
      <div class="logo">
        <a
          href="https://www.deepin.org"
          @mouseenter="logoHover = true"
          @mouseleave="logoHover = false"
          ><img :src="logoSrc"
        /></a>
      </div>
      <navMenu />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import DeepinMono from '~/assets/icons/deepin-mono.svg'
import DeepinColor from '~/assets/icons/deepin-color.svg'
import DeepinMonoDark from '~/assets/icons/deepin-mono-dark.svg'
import { usePreferredDark } from '@vueuse/core'

const logoHover = ref(false)
const isDark = usePreferredDark()
const logoSrc = computed(() =>
  logoHover.value ? DeepinColor : isDark.value ? DeepinMonoDark : DeepinMono
)
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 250px;
  z-index: 9999;
  background-color: var(--website-layer-background);

  .nav-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .logo,
    .menu > li {
      display: flex;
      align-items: center;
      color: var(--website-font-primary);
    }

    .logo {
      font-size: 26.82px;
      font-weight: 700;

      a {
        display: flex;
        align-items: center;

        img {
          height: 26.82px;
        }
      }
    }

    .menu {
      display: flex;
      gap: 24px;
      font-size: 14px;
      font-weight: 600;
      align-items: center;

      span {
        cursor: pointer;
        user-select: none;
      }

      > a {
        color: inherit;
        text-decoration: none;
      }

      .lang {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;

        img {
          width: 20px;
          height: 20px;
          filter: drop-shadow(100px 0 0 var(--website-font-primary));
        }
      }
    }
  }
}
</style>
