<template>
  <nav
    class="fixed top-0 left-0 w-full h-16 z-[9999] bg-[--website-layer-background]">
    <div class="max-w-5xl mx-auto w-full h-full flex justify-between">
      <div class="text-[26.82px] font-bold flex items-center">
        <a
          href="https://www.deepin.org"
          @mouseenter="logoHover = true"
          @mouseleave="logoHover = false"
          ><ClientOnly><img class="h-[26.82px]" :src="logoSrc" /></ClientOnly
        ></a>
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
