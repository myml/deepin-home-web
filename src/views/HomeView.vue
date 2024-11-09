<template>
  <main class="mt-16">
    <NCarousel :value-list="imageList" height="500px" class="my-5">
      <template #default="val">
        <div class="w-full h-full overflow-hidden rounded-2xl">
          <div :style="{background:`url(${val.value}) lightgray 50% / cover no-repeat`}" class="object-fill w-full h-full">
            <span class="text-3xl text-red-700">666666666666666666</span>
          </div>
        </div>
      </template>
    </NCarousel>
    <!-- 选择deepin的理由 -->
    <div class="mx-64 my-5">
      <div class="text-3xl font-bold">
        <span v-html="highlightDeepin(t('tips.reason'))"/>
      </div>
      <div class="grid grid-cols-3 gap-3 mt-5">
        <div v-for="(item, index) in reasonList" :key="index" class="bg-white rounded-xl p-5"
             :class="{ 'col-span-2': index === reasonList.length - 1 }">
          <div class="w-full flex-auto">
            <span class="text-2xl font-bold">{{ item.title }}</span>
            <p class="text-[--website-font-secondary]">{{ item.content }}</p>
            <div class="size-72">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  社区动态  -->
    <div class="mx-64 my-5">
      <div class="text-3xl font-bold">
        <span v-html="highlightDeepin(t('tips.community'))" />
      </div>
        <div v-for="(item, index) in community" :key="index" class="bg-white rounded-xl my-5 flex overflow-hidden">
          <div :style="{background:`url(${item.image})  no-repeat`}" class="w-1/4 h-32">
            <span style="text-align: center">测试</span>
          </div>
          <div class="w-full flex-col flex p-2.5">
            <div class="text-base font-bold">{{ item.title }}</div>
            <p class="text-[--website-font-secondary] mt-3.5 text-xs">{{ item.content }}</p>
            <div class="text-[--website-font-secondary] mt-3.5 text-xs">{{ item.time }}</div>
          </div>
        </div>
        <div class="flex items-center justify-center ">
          <el-button color="#FFF" class="text-gray-300"  round>
            <span class="text-[--website-font-secondary]" @click="pushClick">查看更多 +</span>
          </el-button>
        </div>
    </div>
  </main>
  <!--    <div class="text-3xl font-bold">{{ t('home.hello') }}</div>-->
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import NCarousel from '@/components/nCarousel.vue'
import {ref} from "vue";

const { t } = useI18n()
const imageList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
]
const reasonList = [
  {
    title:'开箱即用',
    content:'安装简单，无需对系统进行额外配置和软件安装，即可满足日常办公的需要。'
  },
  {
    title:'尊重隐私',
    content:'用户隐私是我们一直所关注的事情，我们尊重您的个人数据和隐私安全。您拥有deepin的所有控制权，可以用它做任何您想做的事情。'
  },
  {
    title:'社区强大',
    content:'我们和用户有着紧密的联系，您可以通过微信、论坛、GitHub、Telegram、Twitter 向我们反馈问题。'
  },
  {
    title:'开箱即用',
    content:'我们不仅自研一系列基础办公软件，而且兼容大部分安卓和Windows软件，有40000+款软件供您选择。'
  }, {
    title:'代码开源',
    content:'我们遵循开源软件许可证协议发布源代码，相关项目和源代码均可在 GitHub 上进行查看。'
  }
]
const communitys = [
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  }
]
const community = ref([
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
  {
    image:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    title:"deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖",
    content:'10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time:"2024-10-16 12:12:12"
  },
])
function pushClick(){
  community.value =[...community.value,...communitys]
}

/**
 * 高亮deepin
 * @param text
 * @returns {*}
 */
function highlightDeepin(text) {
  return text.replace(/deepin/gi, '<span class="text-[--website-font-active]">$&</span>')
}

</script>

<style lang="scss" scoped>
//main {
//  margin-top: 64px;
//
//  h1 {
//    color: var(--website-font-primary);
//  }
//}
</style>
