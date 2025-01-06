<template>
  <div>
    <navBar v-if="home.config" />
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
          class="h-[189px] bg-[--website-layer-card-background] rounded-xl my-5 flex items-center overflow-hidden border border-[--website-layer-card-border]">
          <img
            :src="parseImgUrl(item.content.rendered)"
            class="w-[316px] h-full cursor-pointer"
            @click="openUrl(item.link)" />
          <div class="w-full flex-col flex p-2.5 overflow-hidden font-semibold">
            <div
              class="text-xl text-ellipsis overflow-hidden whitespace-nowrap cursor-pointer"
              @click="openUrl(item.link)"
              v-html="item.title.rendered"></div>
            <div
              class="text-[--website-font-secondary] mt-3.5 text-sm line-clamp-3"
              v-html="item.excerpt.rendered"></div>
            <div
              class="text-[--website-font-third] mt-3.5 text-xs"
              v-html="formatDate(item.date)"></div>
          </div>
        </div>
        <div v-if="news.loading" class="flex items-center justify-center">
          <progress /> {{ t('tips.loading') }}
        </div>
        <div class="flex items-center justify-center">
          <button
            class="w-36 h-12 rounded-[39px] bg-[--website-layer-card-background] border border-[--website-layer-card-border]"
            @click="openUrl('https://www.deepin.org/zh/community-events/')">
            <span class="text-[--website-font-primary] text-lg font-semibold"
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
  </div>
</template>

<script setup lang="ts">
import { highlightDeepin, formatDate } from '~/utils/format'
const { t, locale } = useI18n()
const { home, getHome, news, getNews } = useHomeStore()

const _result = await useAsyncData('home', async () => {
  return Promise.all([getHome(locale.value), getNews(locale.value)])
})

useHead({
  titleTemplate: home.config?.seo.title,
  meta: [
    { name: 'description', content: home.config?.seo.description },
    { name: 'keywords', content: home.config?.seo.keywords.join(',') },
    { property: 'og:title', content: home.config?.seo.title },
    { property: 'og:description', content: home.config?.seo.description },
    { property: 'og:keywords', content: home.config?.seo.keywords }
  ]
})

useSeoMeta({
  titleTemplate: home.config?.seo.title,
  ogTitle: home.config?.seo.title,
  description: home.config?.seo.description,
  ogDescription: home.config?.seo.description,
  keywords: home.config?.seo.keywords.join(',')
})

// 提取图片url
const parseImgUrl = (content: string) => {
  const reg = /<img.*?src="(.*?)".*?>/g
  const result = reg.exec(content)
  return result ? result[1] : ''
}

const openUrl = (url: string) => {
  window.open(url)
}
</script>
