<template>
  <main class="mt-16">
    <NCarousel :value-list="imageList" height="500px" class="my-5">
      <template #default="val">
        <div class="w-full h-full overflow-hidden rounded-2xl">
          <div
            :style="{
              background: `url(${val.value}) lightgray 50% / cover no-repeat`
            }"
            class="object-fill w-full h-full"
          >
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
        <div
          v-for="(item, index) in reasonList"
          :key="index"
          class="bg-white rounded-xl p-5"
          :class="{ 'col-span-2': index === reasonList.length - 1 }"
        >
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
      <div
        v-for="(item, index) in community"
        :key="index"
        class="bg-white rounded-xl my-5 flex overflow-hidden"
      >
        <div
          :style="{ background: `url(${item.image})  no-repeat` }"
          class="w-1/4 h-32"
        >
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
          <span class="text-[--website-font-secondary]" @click="pushClick"
            >查看更多 +</span
          >
        </el-button>
      </div>
    </div>
    <!-- 开源社区 -->
    <div class="mx-64 my-5 text-[--website-font-primary]">
      <div class="flex justify-between items-center">
        <span
          class="text-3xl font-semibold"
          v-html="t('tips.openSource')"
        ></span>
        <div
          class="flex justify-center items-center bg-[--website-layer-card-background] rounded-full py-3 px-[22px] border border-[--website-layer-card-border] border-solid cursor-pointer"
        >
          <span class="text-[--website-font-secondary] font-semibold"
            >github.com/<span class="text-[--website-font-primary]"
              >linuxdeepin</span
            ></span
          >
          <img class="w-6 h-6" :src="ArrowDownRight" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-3 grid-rows-2 gap-5 mt-6">
        <!-- 贡献看板和参与社区 -->
        <div class="row-span-2 flex flex-col gap-5 text-2xl font-semibold">
          <div
            class="flex justify-center items-center gap-4 h-[108px] bg-[--website-layer-card-background] rounded-[18px] border border-[--website-layer-card-border] border-solid cursor-pointer"
          >
            <img class="w-[28px] h-[28px]" :src="BrowserCode" alt="" />
            <span>贡献看板</span>
          </div>
          <div
            class="flex justify-center items-center gap-4 h-[108px] mt-[5px] bg-[--website-layer-card-background] rounded-[18px] border border-[--website-layer-card-border] border-solid cursor-pointer"
          >
            <img class="w-[28px] h-[28px]" :src="JoinCommunity" alt="" />
            <span>贡献看板</span>
          </div>
        </div>
        <div
          class="col-span-2 row-span-2 grid grid-cols-3 grid-rows-2 gap-0 rounded-[18px] overflow-hidden border border-[--website-layer-card-border] border-solid cursor-pointer"
        >
          <div
            v-for="(item, index) in openSource"
            :key="index"
            class="flex flex-col items-center justify-center bg-[--website-layer-card-background]"
            :class="{ 'bg-[--website-tag-background]': index % 2 === 1 }"
          >
            <div class="flex items-center font-semibold text-[18px]">
              <img class="w-6 h-6" :src="item.icon" alt="" />
              <span class="ml-1" v-html="formatNumber(item.count)"></span>
            </div>
            <div
              class="text-[--website-font-secondary] text-xs font-semibold mt-1"
            >
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import NCarousel from '@/components/nCarousel.vue'
import { ref } from 'vue'
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

const { t } = useI18n()
const imageList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
]
const reasonList = [
  {
    title: '开箱即用',
    content:
      '安装简单，无需对系统进行额外配置和软件安装，即可满足日常办公的需要。'
  },
  {
    title: '尊重隐私',
    content:
      '用户隐私是我们一直所关注的事情，我们尊重您的个人数据和隐私安全。您拥有deepin的所有控制权，可以用它做任何您想做的事情。'
  },
  {
    title: '社区强大',
    content:
      '我们和用户有着紧密的联系，您可以通过微信、论坛、GitHub、Telegram、Twitter 向我们反馈问题。'
  },
  {
    title: '开箱即用',
    content:
      '我们不仅自研一系列基础办公软件，而且兼容大部分安卓和Windows软件，有40000+款软件供您选择。'
  },
  {
    title: '代码开源',
    content:
      '我们遵循开源软件许可证协议发布源代码，相关项目和源代码均可在 GitHub 上进行查看。'
  }
]
const communitys = [
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  }
]
const community = ref([
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  }
])
function pushClick() {
  community.value = [...community.value, ...communitys]
}

const openSource = ref([
  {
    icon: GitBranch,
    count: 24306,
    desc: 'Pull Requests'
  },
  {
    icon: PackagePlus,
    count: 109596,
    desc: 'Commits'
  },
  {
    icon: UserProfile,
    count: 2052,
    desc: 'Contributors'
  },
  {
    icon: Package,
    count: 8964,
    desc: 'Repositories'
  },
  {
    icon: AnnoTationTyping,
    count: 11664,
    desc: 'Issues'
  },
  {
    icon: UsersProfiles,
    count: 61,
    desc: 'Teams'
  }
])
</script>
