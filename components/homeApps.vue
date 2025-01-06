<template>
  <div class="text-3xl font-semibold" v-html="setting.title" />
  <section class="mt-5 grid grid-cols-2 gap-2">
    <div
      v-for="(card, index) in setting.cards"
      :key="index"
      class="flex flex-col bg-[--website-layer-card-background] rounded-xl border border-[--website-layer-card-border]">
      <div class="min-h-40 p-5">
        <h3 class="text-lg font-semibold my-4">
          {{ card.title }}
        </h3>

        <div class="text-sm text-[--website-font-secondary]">
          {{ card.content }}
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div
          v-for="(v, index) in card.list"
          :key="index"
          class="flex items-center pl-4 border border-[--website-app-border] border-l-0 border-b-0 h-10 whitespace-nowrap text-xs"
          :class="{ 'border-r-0': index % 3 === 2 }">
          <template v-if="!v.disabled">
            <img class="w-6 h-6 mr-1" :src="v.image" :alt="v.title" />
            <a v-if="v.link" :href="v.link" targe="_blank"> {{ v.title }} </a>
            <span v-if="!v.link"> {{ v.title }} </span>
          </template>
          <template v-else>
            <div class="w-6 h-6 mr-1" />
            <a
              v-if="v.link"
              class="text-[#c5c5c5]"
              :href="v.link"
              target="_blank"
              rel="noopener">
              {{ v.title }}
            </a>
            <span v-if="!v.link"> {{ v.title }} </span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Apps } from '@/api/model'
import { useI18n } from 'vue-i18n'

const { setting } = defineProps<{
  setting: Apps
}>()
const { t } = useI18n()
</script>
