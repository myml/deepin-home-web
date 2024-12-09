<template>
  <div class="flex justify-between items-center">
    <span class="text-3xl font-semibold" v-html="t('tips.openSource')" />
    <div
      class="flex justify-center items-center bg-[--website-layer-card-background] rounded-full py-3 px-[22px] border border-[--website-layer-card-border] border-solid cursor-pointer">
      <span class="text-[--website-font-secondary] font-semibold"
        >github.com/<span class="text-[--website-font-primary]"
          >linuxdeepin</span
        ></span
      >
      <img
        class="w-6 h-6"
        src="~/assets/icons/arrow-down-right-sm.svg"
        alt="" />
    </div>
  </div>
  <div class="grid grid-cols-3 grid-rows-2 gap-5 mt-6">
    <!-- 贡献看板和参与社区 -->
    <div class="row-span-2 flex flex-col gap-5 text-2xl font-semibold">
      <div
        class="flex justify-center items-center gap-4 h-[108px] bg-[--website-layer-card-background] rounded-[18px] border border-[--website-layer-card-border] border-solid cursor-pointer">
        <img
          class="w-[28px] h-[28px]"
          src="~/assets/icons/browser-code.svg"
          alt="" />
        <span v-html="t('tips.contribution')" />
      </div>
      <div
        class="flex justify-center items-center gap-4 h-[108px] mt-[5px] bg-[--website-layer-card-background] rounded-[18px] border border-[--website-layer-card-border] border-solid cursor-pointer">
        <img
          class="w-[28px] h-[28px]"
          src="~/assets/icons/join-community.svg"
          alt="" />
        <span v-html="t('tips.joinCommunity')" />
      </div>
    </div>
    <div
      class="col-span-2 row-span-2 grid grid-cols-3 grid-rows-2 gap-0 rounded-[18px] overflow-hidden border border-[--website-layer-card-border] border-solid cursor-pointer">
      <div
        v-for="(item, index) in openSource"
        :key="index"
        class="flex flex-col items-center justify-center bg-[--website-layer-card-background]"
        :class="{ 'bg-[--website-tag-background]': index % 2 === 1 }">
        <div class="flex items-center font-semibold text-[18px]">
          <img class="w-6 h-6" :src="item.icon" alt="" />
          <span class="ml-1" v-html="formatNumber(item.count)" />
        </div>
        <div class="text-[--website-font-secondary] text-xs font-semibold mt-1">
          {{ item.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { formatNumber } from '@/utils/format'
import AnnoTationTyping from '@/assets/icons/annotation-typing.svg'
import GitBranch from '@/assets/icons/git-branch.svg'
import Package from '@/assets/icons/package.svg'
import PackagePlus from '@/assets/icons/package-plus.svg'
import UserProfile from '@/assets/icons/user-profile.svg'
import UsersProfiles from '@/assets/icons/users-profiles.svg'
const { home } = useHomeStore()
const { t } = useI18n()

const openSource = computed(() => {
  if (!home.opensource) {
    return []
  }
  return [
    {
      icon: GitBranch,
      count: home.opensource.pull_request,
      desc: 'Pull Requests'
    },
    {
      icon: PackagePlus,
      count: home.opensource.commits,
      desc: 'Commits'
    },
    {
      icon: UserProfile,
      count: home.opensource.dev,
      desc: 'Contributors'
    },
    {
      icon: Package,
      count: home.opensource.repo,
      desc: 'Repositories'
    },
    {
      icon: AnnoTationTyping,
      count: home.opensource.issues,
      desc: 'Issues'
    },
    {
      icon: UsersProfiles,
      count: home.opensource.team,
      desc: 'Teams'
    }
  ]
})
</script>
