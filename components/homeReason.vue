<template>
  <div class="max-w-5xl mx-auto mt-36 mb-5">
    <div class="text-3xl font-semibold">
      <span v-html="highlightDeepin(t('tips.reason'))" />
    </div>
    <div class="grid grid-cols-3 gap-5 mt-5">
      <template v-if="reason.cards.length">
        <!-- 开箱即用区域 -->
        <div
          class="flex flex-col p-6 h-[400px] bg-[--website-layer-card-background] font-semibold rounded-xl border border-[--website-layer-card-border]">
          <span class="text-2xl">{{ reason.cards[0].title }}</span>
          <p class="text-[--website-font-secondary] mt-[7px]">
            {{ reason.cards[0].content }}
          </p>
          <div class="relative flex-1 flex items-center justify-center">
            <div
              class="absolute top-[42px] left-[27px] flex justify-center items-center w-8 h-8 rounded-lg border border-[--website-layer-card-border]">
              <img
                src="~/assets/icons/package.svg"
                alt="package"
                class="w-4 h-4" />
            </div>
            <div
              class="absolute top-[32px] right-[33px] flex justify-center items-center w-8 h-8 rounded-lg border border-[--website-layer-card-border]">
              <img
                src="~/assets/icons/package.svg"
                alt="package"
                class="w-4 h-4" />
            </div>
            <div
              class="absolute top-[52px] right-[91px] flex justify-center items-center w-8 h-8 rounded-lg border border-[--website-layer-card-border]">
              <img
                src="~/assets/icons/package.svg"
                alt="package"
                class="w-4 h-4" />
            </div>
            <div
              class="install-btn flex items-center justify-center gap-1 w-[176px] h-[49px] px-[39px] py-3 text-xs rounded-[10px] border border-[--website-tag-active-border] font-semibold text-[--website-tag-active-border]">
              <span class="text-2xl">⚡</span><span>一键安装</span>
            </div>
            <div
              class="absolute top-[165px] left-[11px] flex justify-center items-center w-8 h-8 rounded-lg border border-[--website-layer-card-border]">
              <img
                src="~/assets/icons/package.svg"
                alt="package"
                class="w-4 h-4" />
            </div>
            <div
              class="absolute top-[196px] left-[75px] flex justify-center items-center w-8 h-8 rounded-lg border border-[--website-layer-card-border]">
              <img
                src="~/assets/icons/package.svg"
                alt="package"
                class="w-4 h-4" />
            </div>
            <div
              class="absolute top-[178px] right-[34px] flex justify-center items-center w-8 h-8 rounded-lg border border-[--website-layer-card-border]">
              <img
                src="~/assets/icons/package.svg"
                alt="package"
                class="w-4 h-4" />
            </div>
          </div>
        </div>
        <!-- 尊重隐私区域 -->
        <div
          class="relative flex flex-col p-6 h-[400px] bg-[--website-layer-card-background] font-semibold rounded-xl border border-[--website-layer-card-border]">
          <span class="text-2xl z-10">{{ reason.cards[1].title }}</span>
          <p class="text-[--website-font-secondary] text-base mt-[7px] z-10">
            {{ reason.cards[1].content }}
          </p>
          <div class="flex-1 relative">
            <img
              :src="isDark ? ShieldDark : Shield"
              alt="shield"
              class="absolute top-[-25px] left-[42px] w-[194px] h-[257px] z-0" />
          </div>
        </div>
        <!-- 社区强大区域 -->
        <div
          class="w-full flex flex-col flex-auto p-6 h-[400px] bg-[--website-layer-card-background] font-semibold rounded-xl border border-[--website-layer-card-border]">
          <span class="text-2xl">{{ reason.cards[2].title }}</span>
          <p class="text-[--website-font-secondary] mt-[7px] z-20">
            {{ reason.cards[2].content }}
          </p>
          <div class="flex-1 relative z-10 communication">
            <div class="absolute top-[-16px]">
              <div
                class="w-[277px] h-[277px] z-20 relative border border-[--website-layer-card-border] rounded-full">
                <div class="w-[233px] h-[233px] z-30 circle-container">
                  <div class="w-[189px] h-[189px] z-40 circle-container">
                    <div class="w-[145px] h-[145px] z-50 circle-container">
                      <div class="wechat element">
                        <img
                          src="~/assets/apps/wechat.png"
                          alt="wechat"
                          class="rounded-full" />
                      </div>
                      <div class="element github">
                        <img
                          src="~/assets/apps/github.jpg"
                          alt="github"
                          class="rounded-full" />
                      </div>
                      <div class="element x">
                        <img
                          src="~/assets/apps/x.jpg"
                          alt="x"
                          class="rounded-full" />
                      </div>
                      <div class="element telegram">
                        <img
                          src="~/assets/apps/telegram.jpg"
                          alt="telegram"
                          class="rounded-full" />
                      </div>
                      <div class="w-[101px] h-[101px] circle-container">
                        <div class="w-[57px] h-[57px] circle-container center">
                          <img
                            src="~/assets/icons/users-profiles.svg"
                            alt="users-profiles" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 生态完善区域 -->
        <div
          class="flex flex-col p-6 h-[400px] bg-[--website-layer-card-background] font-semibold rounded-xl border border-[--website-layer-card-border]">
          <span class="text-2xl">{{ reason.cards[3].title }}</span>
          <p class="text-[--website-font-secondary] text-base mt-[7px]">
            {{ reason.cards[3].content }}
          </p>
          <div class="flex-1 relative">
            <img
              class="absolute top-[34px] left-[3px] h-[58px] w-[58px] rounded-xl border border-[--website-image-border]"
              src="~/assets/apps/QQ.png"
              alt="QQ" />
            <img
              class="absolute top-[139px] left-[3px] h-[58px] w-[58px] rounded-xl border border-[--website-image-border]"
              src="~/assets/apps/dingding.png"
              alt="DingDing" />
            <img
              class="absolute top-[7px] left-[86px] h-[58px] w-[58px] rounded-xl border border-[--website-image-border]"
              src="~/assets/apps/chrome.png"
              alt="Chrome" />
            <img
              class="absolute top-[37px] left-[169px] h-[58px] w-[58px] rounded-xl border border-[--website-image-border]"
              src="~/assets/apps/firefox.png"
              alt="Firefox" />
            <img
              class="absolute top-[104px] right-0 h-[58px] w-[58px] rounded-xl border border-[--website-image-border]"
              src="~/assets/apps/txvideo.png"
              alt="腾讯视频" />
            <img
              class="absolute top-[109px] left-[94px] h-[58px] w-[58px] rounded-xl border border-[--website-image-border]"
              src="~/assets/apps/edge.png"
              alt="edge" />
            <img
              class="absolute bottom-0 left-[79px] h-[58px] w-[58px] rounded-xl border border-[--website-image-border]"
              src="~/assets/apps/wechat.png"
              alt="微信" />
            <img
              class="absolute bottom-[15px] right-[50px] h-[58px] w-[58px] rounded-xl border border-[--website-image-border]"
              src="~/assets/apps/steam.png"
              alt="steam" />
          </div>
        </div>
        <!-- 代码开源区域 -->
        <div
          ref="codeOpenSource"
          class="w-full flex-auto pt-6 col-span-2 h-[400px] bg-[--website-layer-card-background] font-semibold rounded-xl border border-[--website-layer-card-border]">
          <span class="text-2xl mx-6">{{ reason.cards[4].title }}</span>
          <div
            class="text-[--website-font-secondary] mx-6 mt-[7px]"
            v-html="reason.cards[4].content"></div>
          <div
            class="w-full h-[260px] mt-[11px]"
            @mouseenter="codeOpenSourceMouseEnter = true"
            @mouseleave="codeOpenSourceMouseEnter = false">
            <div
              v-for="(row, _repoIndex) in repos"
              :key="_repoIndex"
              class="w-full h-[35px] mt-[10px] text-sm text-nowrap font-normal relative overflow-hidden">
              <div
                class="flex flex-nowrap gap-[6px] absolute"
                :style="{
                  transform: `translateX(${codeOpenSourceTranslateX}px)`
                }">
                <div
                  v-for="(repo, repoIndex) in row"
                  :key="repoIndex"
                  class="flex h-[35px] items-center bg-[--website-tag-background] text-sm cursor-pointer text-[--website-font-secondary] font-normal rounded-lg px-4 py-2 border border-[--website-tag-border] transition duration-200 hover:text-[--website-font-active] hover:bg-[--website-tag-active-background] hover:border-[--website-tag-active-border]">
                  <span>{{ repo.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { highlightDeepin } from '@/utils/format'
import { ref } from 'vue'
import { useIntersectionObserver, usePreferredDark } from '@vueuse/core'
import type { Reason } from '@/api/model'
import Shield from '~/assets/imgs/shield.svg'
import ShieldDark from '~/assets/imgs/shield-dark.svg'

const { t } = useI18n()
const isDark = usePreferredDark()

const { reason } = defineProps<{
  reason: Reason
}>()

const reposRow = ref(6)
const repos = ref<{ title: string; link: string }[][]>([])
const reposCopy = ref<{ title: string; link: string }[][]>([])
// 检测代码开源区域的可见性，动态的滚动和停止滚动
const codeOpenSource = ref(null)
const codeOpenSourceTranslateX = ref(0)
// 滚动定时器
let codeOpenSourceTimer: ReturnType<typeof setTimeout> | null = null
// 鼠标是否进入代码开源区域
const codeOpenSourceMouseEnter = ref(false)

useIntersectionObserver(codeOpenSource, ([entry]) => {
  if (entry.isIntersecting) {
    if (codeOpenSourceTimer) {
      clearInterval(codeOpenSourceTimer)
    }
    codeOpenSourceTimer = setInterval(() => {
      if (codeOpenSourceMouseEnter.value) return
      codeOpenSourceTranslateX.value -= 1
      if (repos.value.length <= 0) {
        return
      }

      // 滚动到最后一个元素的时候，复制一份
      if (codeOpenSourceTranslateX.value <= -50 * repos.value[0].length) {
        repos.value.forEach((_row, index) => {
          repos.value[index].push(...reposCopy.value[index])
        })
      }
    }, 50)
  } else {
    if (codeOpenSourceTimer) {
      clearInterval(codeOpenSourceTimer)
    }
  }
})

// 分配数据
const calculateRepos = (
  _repos: { title: string; link: string }[] | undefined
) => {
  if (!_repos) {
    return
  }
  repos.value = []
  reposCopy.value = []
  const result: { title: string; link: string }[][] = []
  // 创建6个空数组
  for (let i = 0; i < reposRow.value; i++) {
    result.push([])
  }
  // 每次遍历，计算哪个数组里面的每一个元素的字符串长度总和最小，然后放进去
  for (let i = 0; i < _repos.length; i++) {
    let minIndex = 0
    let min = result[0].reduce((acc, cur) => acc + cur.title.length, 0)
    for (let j = 1; j < reposRow.value; j++) {
      const sum = result[j].reduce((acc, cur) => acc + cur.title.length, 0)
      if (sum < min) {
        min = sum
        minIndex = j
      }
    }
    result[minIndex].push(_repos[i])
  }
  repos.value = result
  reposCopy.value = result
}
calculateRepos(reason.cards[reason.cards.length - 1].repos)
</script>

<style lang="scss" scoped>
.install-btn {
  background: linear-gradient(0deg, #eef9ff 0%, #fff 100%);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(0deg, #102f3f 0%, #393939 100%);
  }
}

.communication {
  /** 鼠标hover时停止旋转 **/
  &:hover {
    .element {
      animation-play-state: paused;
    }
  }
}

.circle-container {
  position: absolute;
  top: 22px;
  left: 22px;
  border: 1px solid var(--website-layer-card-border);
  border-radius: 50%;

  .center {
    background: linear-gradient(180deg, #fff 0%, #fafafa 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
  }
}

.element {
  position: absolute;

  top: calc(50% - 17px);
  left: calc(50% - 17px);
  width: 34px;
  height: 34px;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 50%;
  border: 1px solid #f1f1f1;

  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    cursor: pointer;
  }
}

.wechat {
  animation: wechat 11s forwards infinite;

  animation-timing-function: linear;
}

.github {
  animation: github 11s forwards infinite;

  animation-timing-function: linear;
}

.x {
  animation: x 11.5s forwards infinite;

  animation-timing-function: linear;
  z-index: 30;
}

.telegram {
  animation: telegram 11.5s forwards infinite;

  animation-timing-function: linear;
}

@keyframes wechat {
  from {
    transform: rotate(40deg) translateX(52px) rotate(-40deg);
  }
  to {
    transform: rotate(400deg) translateX(52px) rotate(-400deg);
  }
}

@keyframes github {
  from {
    transform: rotate(225deg) translateX(52px) rotate(-225deg);
  }
  to {
    transform: rotate(585deg) translateX(52px) rotate(-585deg);
  }
}

@keyframes x {
  from {
    transform: rotate(135deg) translateX(105px) rotate(-135deg);
  }
  to {
    transform: rotate(495deg) translateX(105px) rotate(-495deg);
  }
}

@keyframes telegram {
  from {
    transform: rotate(-10deg) translateX(105px) rotate(10deg);
  }
  to {
    transform: rotate(350deg) translateX(105px) rotate(-350deg);
  }
}
</style>
