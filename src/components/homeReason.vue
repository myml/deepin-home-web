<template>
  <div class="max-w-5xl mx-auto my-5">
    <div class="text-3xl font-semibold">
      <span v-html="highlightDeepin(t('tips.reason'))" />
    </div>
    <div class="grid grid-cols-3 gap-5 mt-5">
      <div
        v-for="(item, index) in reasonList"
        :key="index"
        class="h-[400px] bg-[--website-layer-card-background] font-semibold rounded-xl border border-[--website-layer-card-border]"
        :class="{
          'col-span-2': index === reasonList.length - 1,
          'p-5': index !== reasonList.length - 1
        }"
      >
        <div v-if="index !== reasonList.length - 1" class="w-full flex-auto">
          <span class="text-2xl">{{ item.title }}</span>
          <p class="text-[--website-font-secondary] mt-[7px]">
            {{ item.content }}
          </p>
          <div class="size-72"></div>
        </div>
        <div v-else class="w-full flex-auto pt-6" ref="codeOpenSource">
          <span class="text-2xl mx-6">{{ item.title }}</span>
          <p
            class="text-[--website-font-secondary] mx-6 mt-[7px]"
            v-html="item.content"
          ></p>
          <div class="w-full h-[260px] mt-[11px]">
            <div
              class="w-full h-[35px] mt-[10px] text-sm text-nowrap font-normal relative overflow-hidden"
              v-for="(row, _repoIndex) in repos"
              :key="_repoIndex"
            >
              <div
                class="flex flex-nowrap gap-[6px] absolute"
                :style="{
                  transform: `translateX(${codeOpenSourceTranslateX}px)`
                }"
              >
                <div
                  v-for="(repo, repoIndex) in row"
                  :key="repoIndex"
                  class="flex h-[35px] items-center bg-[--website-tag-background] text-sm cursor-pointer text-[--website-font-secondary] font-normal rounded-lg px-4 py-2 border border-[--website-tag-border] hover:text-[--website-font-active] hover:bg-[--website-tag-active-background] hover:border-[--website-tag-active-border]"
                >
                  <span>{{ repo.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { highlightDeepin } from '@/utils/format'
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const { t } = useI18n()
const { reasonList } = defineProps<{
  reasonList: {
    title: string
    content: string
    repos: { title: string; link: string }[]
  }[]
}>()

const reposRow = ref(6)
const repos = ref<{ title: string; link: string }[][]>([])
// 检测代码开源区域的可见性，动态的滚动和停止滚动
const codeOpenSource = ref(null)
const codeOpenSourceVisible = ref(false)
const codeOpenSourceTranslateX = ref(0)
// 滚动定时器
let codeOpenSourceTimer: ReturnType<typeof setTimeout> | null = null

useIntersectionObserver(codeOpenSource, ([entry]) => {
  if (entry.isIntersecting) {
    codeOpenSourceVisible.value = true
    if (codeOpenSourceTimer) {
      clearInterval(codeOpenSourceTimer)
    }
    codeOpenSourceTimer = setInterval(() => {
      codeOpenSourceTranslateX.value -= 1
      if (repos.value.length <= 0) {
        return
      }

      // 滚动到最后一个元素的时候，复制一份
      if (codeOpenSourceTranslateX.value <= -50 * repos.value[0].length) {
        repos.value.forEach((row, index) => {
          repos.value[index] = [...row, ...row]
        })
      }
    }, 50)
  } else {
    codeOpenSourceVisible.value = false
    if (codeOpenSourceTimer) {
      clearInterval(codeOpenSourceTimer)
    }
  }
})

// 分配数据
const calculateRepos = (_repos: { title: string; link: string }[]) => {
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
}

calculateRepos(reasonList[reasonList.length - 1].repos)
</script>
