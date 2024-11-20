<template>
  <main class="mt-16" v-if="home.config">
    <NCarousel :value-list="home.config.imageList" height="500px" class="my-5">
      <template #default="val">
        <div class="w-full h-full overflow-hidden rounded-2xl">
          <div :style="{
            background: `url(${val.value}) lightgray 50% / cover no-repeat`
          }" class="object-fill w-full h-full">
            <span class="text-3xl text-red-700">666666666666666666</span>
          </div>
        </div>
      </template>
    </NCarousel>
    <!-- 选择deepin的理由 -->
    <div class="mx-64 my-5">
      <div class="text-3xl font-semibold">
        <span v-html="highlightDeepin(t('tips.reason'))" />
      </div>
      <div class="grid grid-cols-3 gap-3 mt-5">
        <div v-for="(item, index) in home.config.reasonList" :key="index" class="bg-white rounded-xl p-5"
          :class="{ 'col-span-2': index === home.config.reasonList.length - 1 }">
          <div class="w-full flex-auto">
            <span class="text-2xl font-semibold">{{ item.title }}</span>
            <p class="text-[--website-font-secondary]">{{ item.content }}</p>
            <div class="size-72"></div>
          </div>
        </div>
      </div>
    </div>
    <!--  社区动态  -->
    <div class="mx-64 my-5">
      <div class="text-3xl font-semibold">
        <span v-html="highlightDeepin(t('tips.community'))" />
      </div>
      <div v-for="(item, index) in news" :key="index" class="bg-white rounded-xl my-5 flex overflow-hidden">
        <div :style="{ background: `url(${item.image})  no-repeat` }" class="w-1/4 h-32">
          <span style="text-align: center">测试</span>
        </div>
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
      <div class="flex items-center justify-center">
        <el-button color="#FFF" class="text-gray-300" round>
          <span class="text-[--website-font-secondary]" @click="pushClick">查看更多 +</span>
        </el-button>
      </div>
    </div>
    <!-- 开源社区 -->
    <div class="mx-64 my-5 text-[--website-font-primary]">
      <div class="flex justify-between items-center">
        <span class="text-3xl font-semibold" v-html="t('tips.openSource')"></span>
        <div
          class="flex justify-center items-center bg-[--website-layer-card-background] rounded-full py-3 px-[22px] border border-[--website-layer-card-border] border-solid cursor-pointer">
          <span class="text-[--website-font-secondary] font-semibold">github.com/<span
              class="text-[--website-font-primary]">linuxdeepin</span></span>
          <img class="w-6 h-6" :src="ArrowDownRight" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-3 grid-rows-2 gap-5 mt-6">
        <!-- 贡献看板和参与社区 -->
        <div class="row-span-2 flex flex-col gap-5 text-2xl font-semibold">
          <div
            class="flex justify-center items-center gap-4 h-[108px] bg-[--website-layer-card-background] rounded-[18px] border border-[--website-layer-card-border] border-solid cursor-pointer">
            <img class="w-[28px] h-[28px]" :src="BrowserCode" alt="" />
            <span>贡献看板</span>
          </div>
          <div
            class="flex justify-center items-center gap-4 h-[108px] mt-[5px] bg-[--website-layer-card-background] rounded-[18px] border border-[--website-layer-card-border] border-solid cursor-pointer">
            <img class="w-[28px] h-[28px]" :src="JoinCommunity" alt="" />
            <span>贡献看板</span>
          </div>
        </div>
        <div
          class="col-span-2 row-span-2 grid grid-cols-3 grid-rows-2 gap-0 rounded-[18px] overflow-hidden border border-[--website-layer-card-border] border-solid cursor-pointer">
          <div v-for="(item, index) in openSource" :key="index"
            class="flex flex-col items-center justify-center bg-[--website-layer-card-background]"
            :class="{ 'bg-[--website-tag-background]': index % 2 === 1 }">
            <div class="flex items-center font-semibold text-[18px]">
              <img class="w-6 h-6" :src="item.icon" alt="" />
              <span class="ml-1" v-html="formatNumber(item.count)"></span>
            </div>
            <div class="text-[--website-font-secondary] text-xs font-semibold mt-1">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import NCarousel from '@/components/nCarousel.vue'
import ArrowDownRight from '@/assets/icons/arrow-down-right-sm.svg'
import BrowserCode from '@/assets/icons/browser-code.svg'
import JoinCommunity from '@/assets/icons/join-community.svg'
import AnnoTationTyping from '@/assets/icons/annotation-typing.svg'
import GitBranch from '@/assets/icons/git-branch.svg'
import Package from '@/assets/icons/package.svg'
import PackagePlus from '@/assets/icons/package-plus.svg'
import UserProfile from '@/assets/icons/user-profile.svg'
import UsersProfiles from '@/assets/icons/users-profiles.svg'
import { highlightDeepin, formatNumber } from '@/utils/format'
import { useLangStore } from '@/stores/home'

const { t } = useI18n()
const { home, getHome, news, loadNews } = useLangStore()

getHome("zh_CN")
loadNews()

function pushClick() {
  loadNews()
}

const openSource = computed(() => {
  if (!home.opensource) {
    return []
  }
  console.log(home.opensource.commits)
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
      count: home.opensource.contributors,
      desc: 'Contributors'
    },
    {
      icon: Package,
      count: home.opensource.repositories,
      desc: 'Repositories'
    },
    {
      icon: AnnoTationTyping,
      count: home.opensource.issues,
      desc: 'Issues'
    },
    {
      icon: UsersProfiles,
      count: home.opensource.teams,
      desc: 'Teams'
    }
  ]
})

</script>
