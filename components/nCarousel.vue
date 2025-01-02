<template>
  <el-carousel
    indicator-position="none"
    arrow="never"
    :interval="interval"
    :height="height"
    type="card"
    :card-scale="1"
    @change="change">
    <el-carousel-item
      v-for="(item, index) in filteredValueList"
      :key="index"
      :class="`class${index}`">
      <div class="w-full h-full overflow-hidden rounded-2xl">
        <div class="w-full h-full relative font-semibold">
          <img
            :src="item.image"
            alt="carousel"
            class="fixed top-0 left-0 right-0 h-full object-fill rounded-2xl"
            @click="openUrl(item.image_link, index)" />
          <span
            v-if="item.title"
            class="absolute left-[53px] top-[183px] text-3xl text-white"
            >{{ item.title }}</span
          >
          <span
            v-if="item.content"
            class="absolute left-[53px] top-[237px] text-xl text-white max-w-[370px]"
            style="min-width: 200px">
            {{ item.content }}
          </span>
          <div
            v-if="item.links.length"
            class="absolute left-[53px] bottom-[33px] flex gap-2">
            <div
              v-for="(link, linkIndex) in item.links"
              :key="linkIndex"
              class="flex items-center justify-center px-[22px] py-3 text-lg gap-1 text-black border border-[#e4e4e4] bg-white rounded-[39px]"
              @click="openUrl(link.url)">
              <img src="~/assets/icons/deepin.svg" alt="" class="w-5 h-5" />
              <span>{{ link.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount, computed } from 'vue'
import type { CarouselCard } from '@/api/model'

const props = defineProps({
  valueList: {
    type: Array<CarouselCard>,
    required: true,
    default: () => []
  },
  interval: {
    type: Number,
    default: 5000
  },
  height: {
    type: String,
    default: '500px'
  }
})

const handleResize = () => {
  adjustCarouselItems()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  adjustCarouselItems()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const current = ref(0)

function change(_current: number) {
  current.value = _current
  adjustCarouselItems()
}

function adjustCarouselItems() {
  nextTick(() => {
    const length = props.valueList.length
    let lefts: HTMLDivElement | null = null
    let rights: HTMLDivElement | null = null
    if (current.value === 0) {
      lefts = document.getElementsByClassName(
        `class${length - 1}`
      )[0] as HTMLDivElement
      rights = document.getElementsByClassName(`class${1}`)[0] as HTMLDivElement
    } else {
      lefts = document.getElementsByClassName(
        `class${current.value - 1}`
      )[0] as HTMLDivElement
      rights = document.getElementsByClassName(
        `class${current.value === length - 1 ? 0 : current.value + 1}`
      )[0] as HTMLDivElement
    }
    if (lefts) {
      lefts.style.transform = `translateX(-${55}%)`
    }
    if (rights) {
      rights.style.transform = `translateX(${155}%)`
    }
  })
}

const openUrl = (url: string, index: number = -1) => {
  // 如果点击的图片在中间，才打开链接
  if (index !== current.value) return
  if (!url) return
  window.open(url)
}

// 从valueList里过滤掉过期的轮播图
const filteredValueList = computed(() => {
  return props.valueList.filter(item => {
    const now = new Date()
    const onlineTime = item.online_time ? new Date(item.online_time) : null
    const downlineTime = item.downline_time
      ? new Date(item.downline_time)
      : null

    if (!onlineTime && !downlineTime) {
      return true // 如果没有设置上线时间和下线时间，则始终显示
    }

    if (onlineTime && now < onlineTime) {
      return false // 如果当前时间小于上线时间，则不显示
    }

    if (downlineTime && now > downlineTime) {
      return false // 如果当前时间大于下线时间，则不显示
    }

    return true // 其他情况显示
  })
})
</script>
