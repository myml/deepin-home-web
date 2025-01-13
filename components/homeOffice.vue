<template>
  <div class="text-3xl font-semibold" v-html="setting.title" />
  <section class="grid grid-cols-4 gap-6 mt-5">
    <div
      v-for="(card, index) in setting.cards"
      :key="index"
      class="flex flex-col bg-[--website-layer-card-background] pb-2 rounded-xl border border-[--website-layer-card-border]">
      <div class="mx-4 my-6 text-left min-h-56">
        <img
          class="w-[80px] h-[80px]"
          :src="card.image"
          :alt="card.title"
          loading="lazy" />
        <h2 class="text-lg font-semibold my-4">
          {{ card.title }}
        </h2>

        <div class="text-sm text-[--website-font-secondary]">
          {{ card.content }}
        </div>
      </div>
      <div class="flex-1"></div>

      <div class="relative mx-1.5 rounded-lg overflow-hidden">
        <img
          :src="card.cover"
          :alt="card.title"
          loading="lazy"
          class="w-full h-[140px]" />
        <img
          class="absolute right-0 bottom-0 top-12 w-[60px] h-[60px]"
          alt="play"
          loading="lazy"
          src="~/assets/play.svg" />
        <div
          class="absolute inset-0 flex items-center justify-center opacity-0 cursor-pointer bg-[#008cba] hover:opacity-100 transition-opacity ease-in-out duration-500"
          @click="openVideoDialog(card.url, card.title)">
          <div class="text-sm text-white">
            {{ card.title }}
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      v-model="videoDialogVisible"
      align-center
      style="padding: 50px"
      :title="dialogTitle"
      destroy-on-close>
      <video style="width: 1024px" :src="videoSrc" autoplay controls></video>
    </el-dialog>
  </section>
</template>

<script setup lang="ts">
import type { Feature } from '@/api/model'

const { setting } = defineProps<{
  setting: Feature
}>()

const dialogTitle = ref('')

const videoDialogVisible = ref(false)
const videoSrc = ref('')

const openVideoDialog = (url: string, title: string) => {
  console.log(url)
  dialogTitle.value = title
  videoSrc.value = url
  videoDialogVisible.value = true
}
</script>
