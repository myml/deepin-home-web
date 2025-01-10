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
      <ClientOnly>
        <img
          class="w-6 h-6"
          :src="isDark ? ArrowRightDark : ArrowRight"
          alt="" />
      </ClientOnly>
    </div>
  </div>
  <div class="grid grid-cols-3 grid-rows-2 gap-5 mt-6">
    <!-- 贡献看板和参与社区 -->
    <div class="row-span-2 flex flex-col gap-5 text-2xl font-semibold">
      <div
        class="flex justify-center items-center gap-4 h-[108px] bg-[--website-layer-card-background] rounded-[18px] border border-[--website-layer-card-border] border-solid cursor-pointer"
        @click="openUrl('https://www.deepin.org/index/datastat')">
        <ClientOnly>
          <img
            class="w-[28px] h-[28px]"
            :src="isDark ? BrowserCodeDark : BrowserCode"
            alt="" />
        </ClientOnly>
        <span v-html="t('tips.contribution')" />
      </div>
      <div
        class="flex justify-center items-center gap-4 h-[108px] mt-[5px] bg-[--website-layer-card-background] rounded-[18px] border border-[--website-layer-card-border] border-solid cursor-pointer"
        @click="
          openUrl(
            locale == 'zh'
              ? 'https://www.deepin.org/index/zh/docs/wiki/06_%E5%85%B3%E4%BA%8EDeepin/Deepin%E7%A4%BE%E5%8C%BA/%E5%8F%82%E4%B8%8E%E6%88%91%E4%BB%AC'
              : 'https://www.deepin.org/index/en/docs/wiki/en/About_Deepin/contribute_code'
          )
        ">
        <ClientOnly>
          <img
            class="w-[28px] h-[28px]"
            :src="isDark ? UserProfileAddDark : UserProfileAdd"
            alt="" />
          <span v-html="t('tips.joinCommunity')" />
        </ClientOnly>
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
          <ClientOnly>
            <img class="w-6 h-6" :src="item.icon" alt="" />
          </ClientOnly>
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
import ArrowRight from '~/assets/icons/arrow-down-right-sm.svg'
import ArrowRightDark from '~/assets/icons/arrow-down-right-sm-dark.svg'
import BrowserCode from '~/assets/icons/browser-code.svg'
import BrowserCodeDark from '~/assets/icons/browser-code-dark.svg'
import UserProfileAdd from '~/assets/icons/user-profile-add.svg'
import UserProfileAddDark from '~/assets/icons/user-profile-add-dark.svg'
import AnnoTationTyping from '~/assets/icons/annotation-typing.svg'
import AnnoTationTypingDark from '~/assets/icons/annotation-typing-dark.svg'
import GitBranch from '@/assets/icons/git-branch.svg'
import GitBranchDark from '@/assets/icons/git-branch-dark.svg'
import Package from '@/assets/icons/package.svg'
import PackageDark from '@/assets/icons/package-dark.svg'
import PackagePlus from '@/assets/icons/package-plus.svg'
import PackagePlusDark from '@/assets/icons/package-plus-dark.svg'
import UserProfile from '@/assets/icons/user-profile.svg'
import UserProfileDark from '@/assets/icons/user-profile-dark.svg'
import UsersProfiles from '@/assets/icons/users-profiles.svg'
import UsersProfilesDark from '@/assets/icons/users-profiles-dark.svg'
import { usePreferredDark } from '@vueuse/core'
const { home } = useHomeStore()
const { t, locale } = useI18n()

const isDark = usePreferredDark()

const openSource = computed(() => {
  if (!home.opensource) {
    return []
  }
  return [
    {
      icon: isDark.value ? GitBranchDark : GitBranch,
      count: home.opensource.pull_request,
      desc: 'Pull Requests'
    },
    {
      icon: isDark.value ? PackagePlusDark : PackagePlus,
      count: home.opensource.commits,
      desc: 'Commits'
    },
    {
      icon: isDark.value ? UserProfileDark : UserProfile,
      count: home.opensource.dev,
      desc: 'Contributors'
    },
    {
      icon: isDark.value ? PackageDark : Package,
      count: home.opensource.repo,
      desc: 'Repositories'
    },
    {
      icon: isDark.value ? AnnoTationTypingDark : AnnoTationTyping,
      count: home.opensource.issues,
      desc: 'Issues'
    },
    {
      icon: isDark.value ? UsersProfilesDark : UsersProfiles,
      count: home.opensource.team,
      desc: 'Teams'
    }
  ]
})

const openUrl = (url: string) => {
  window.open(url)
}
</script>
