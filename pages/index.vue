<template>
  <main v-if="home.config" class="mt-16 text-[--website-font-primary]">
    <nCarousel
      :value-list="home.config.carousel.cards"
      :interval="3000"
      height="500px"
      class="my-5" />
    <!-- 选择deepin的理由 -->
    <homeReason :reason="home.config.reason" />

    <div class="max-w-5xl mx-auto mt-16 mb-5">
      <homeOffice :setting="home.config.feature" />
    </div>

    <div class="max-w-5xl mx-auto mt-16 mb-5">
      <homeApps :setting="home.config.apps" />
    </div>

    <!--  社区动态  -->
    <div class="max-w-5xl mx-auto mt-16 mb-5">
      <div class="text-3xl font-semibold">
        <span v-html="highlightDeepin(t('tips.community'))" />
      </div>
      <div
        v-for="(item, index) in news.data"
        :key="index"
        class="bg-[--website-layer-card-background] rounded-xl my-5 flex overflow-hidden border border-[--website-layer-card-border]">
        <div
          :style="{ background: `url(${item.image})  no-repeat` }"
          class="w-1/4 h-32" />
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
      <div v-if="news.loading" class="flex items-center justify-center">
        <progress /> {{ t('tips.loading') }}
      </div>
      <div class="flex items-center justify-center">
        <button
          class="w-36 h-12 rounded-[39px] bg-[--website-layer-card-background] border border-[--website-layer-card-border]"
          @click="pushClick">
          <span class="text-[--website-font-secondary] text-lg"
            >{{ t('tips.readMore') }} +</span
          >
        </button>
      </div>
    </div>
    <!-- 开源社区 -->
    <div class="max-w-5xl mx-auto mt-16 mb-5 text-[--website-font-primary]">
      <homeOpenSource />
    </div>
    <mFooter :setting="home.config.footer" />
  </main>
</template>

<script setup lang="ts">
import { highlightDeepin } from '~/utils/format'
const { t } = useI18n()
const { home, getHome, news, loadNews } = useHomeStore()

const _result = await useAsyncData('home', () => {
  loadNews()
  return getHome('zh_CN')
})

function pushClick() {
  loadNews()
}
</script>
