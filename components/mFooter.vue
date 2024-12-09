<template>
  <div class="w-full bg-[--website-layer-footer] mt-36">
    <div
      class="max-w-5xl h-full mx-auto py-10 flex flex-col text-xs whitespace-nowrap font-semibold text-[--website-font-secondary]">
      <div class="flex justify-between flex-1">
        <div class="flex gap-14">
          <div
            v-for="(nav, index) in setting.navs"
            :key="index"
            class="flex flex-col">
            <span class="text-base text-[--website-font-primary]">
              {{ nav.title }}
            </span>
            <template v-for="(link, index) in nav.links" :key="index">
              <a
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="mb-3 text-[--website-font-secondary] cursor-pointer"
                :class="{ 'mt-4': index === 0 }"
                >{{ link.text }}</a
              >
            </template>
          </div>
        </div>
        <div>
          <template v-for="(qr, index) in setting.qr.imgs" :key="index">
            <el-popover trigger="hover" placement="left">
              <template #reference>
                <div
                  :class="{ 'mt-10': index === 0 }"
                  class="mb-3 cursor-pointer">
                  {{ qr.text }}
                </div>
              </template>
              <template #default>
                <img :src="qr.img" alt="" class="w-full h-full" />
              </template>
            </el-popover>
          </template>
        </div>
      </div>
      <hr class="my-3 border-[#F0F0F0]" />
      <div class="text-center">
        <div>Made with Love by deepin Web SIG.</div>
        <div class="mt-3">
          © 2011-2024 Wuhan Deepin Technology Co., Ltd.
          <a
            class="underline text-[--website-font-secondary]"
            href="https://beian.miit.gov.cn"
            target="_blank"
            >京ICP备20003780号</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Footer } from '@/api/model'
const { setting } = defineProps<{
  setting: Footer
}>()
</script>
