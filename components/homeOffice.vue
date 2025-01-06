<template>
  <div class="text-3xl font-semibold" v-html="setting.title" />
  <section class="grid grid-cols-4 gap-6 mt-5">
    <div
      v-for="(card, index) in setting.cards"
      :key="index"
      class="flex flex-col bg-[--website-layer-card-background] pb-2 rounded-xl border border-[--website-layer-card-border]">
      <div class="mx-4 my-6 text-left min-h-56">
        <img class="w-[80px] h-[80px]" :src="card.image" :alt="card.title" />
        <h2 class="text-lg font-semibold my-4">
          {{ card.title }}
        </h2>

        <div class="text-sm text-[--website-font-secondary]">
          {{ card.content }}
        </div>
      </div>
      <div class="flex-1"></div>

      <div class="relative mx-1.5 rounded-lg overflow-hidden">
        <img :src="card.cover" :alt="card.title" />
        <img
          class="absolute right-0 bottom-0 top-12 w-[60px] h-[60px]"
          alt="play"
          src="~/assets/play.svg" />
        <a
          class="absolute inset-0 flex items-center justify-center opacity-0 bg-[#008cba] hover:opacity-100 transition-opacity ease-in-out duration-500"
          rel="noopener"
          target="_blank"
          :href="card.url">
          <div class="text-sm text-white">
            {{ card.title }}
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Feature } from '@/api/model'

const { t } = useI18n()
const { setting } = defineProps<{
  setting: Feature
}>()
</script>
