<template>
  <main class="mt-16 text-[--website-font-primary]" v-if="home.config">
    <NCarousel
      :value-list="home.config.carousel.cards"
      :interval="3000"
      height="500px"
      class="my-5"
    />
    <!-- 选择deepin的理由 -->
    <homeReason :reason="home.config.reason"></homeReason>

    <div class="max-w-5xl mx-auto my-5">
      <homeOffice :setting="home.config.feature"></homeOffice>
    </div>

    <div class="max-w-5xl mx-auto my-5">
      <homeApps :setting="home.config.apps"></homeApps>
    </div>

    <!--  社区动态  -->
    <div class="max-w-5xl mx-auto my-5">
      <div class="text-3xl font-semibold">
        <span v-html="highlightDeepin(t('tips.community'))" />
      </div>
      <div
        v-for="(item, index) in news.data"
        :key="index"
        class="bg-[--website-layer-card-background] rounded-xl my-5 flex overflow-hidden border border-[--website-layer-card-border]"
      >
        <div
          :style="{ background: `url(${item.image})  no-repeat` }"
          class="w-1/4 h-32"
        ></div>
        <div class="w-full flex-col flex p-2.5">
          <div class="text-base font-semibold">{{ item.title }}</div>
          <p class="text-[--website-font-secondary] mt-3.5 text-xs">
            {{ item.content }}
          </p>
          <div class="text-[--website-font-secondary] mt-3.5 text-xs">
            {{ item.time }}
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center" v-if="news.loading">
        <progress></progress> {{ t('tips.loading') }}
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="pushClick"
          class="w-36 h-12 rounded-[39px] bg-[--website-layer-card-background] border border-[--website-layer-card-border]"
        >
          <span class="text-[--website-font-secondary] text-lg"
            >{{ t('tips.readMore') }} +</span
          >
        </button>
      </div>
    </div>
    <!-- 开源社区 -->
    <div class="max-w-5xl mx-auto my-5 text-[--website-font-primary]">
      <homeOpenSource />
    </div>
    <Footer :setting="home.config.footer" />
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import NCarousel from '@/components/nCarousel.vue'
import homeReason from '@/components/homeReason.vue'
import homeOffice from '@/components/homeOffice.vue'
import homeApps from '@/components/homeApps.vue'
import homeOpenSource from '@/components/homeOpenSource.vue'
import Footer from '@/components/Footer.vue'
import { highlightDeepin } from '@/utils/format'
import { useLangStore } from '@/stores/home'

const { t } = useI18n()
const { home, getHome, news, loadNews } = useLangStore()

getHome('zh_CN')
loadNews()

function pushClick() {
  loadNews()
}
</script>
