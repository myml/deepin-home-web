<template>
  <el-carousel
    indicator-position="none"
    arrow="never"
    :interval="interval"
    :height="height"
    type="card"
    :card-scale="1"
    @change="change"
  >
    <el-carousel-item
      v-for="(item, index) in valueList"
      :key="index"
      :class="`class${index}`"
    >
      <slot :value="item" :index="index"></slot>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'

/**
 * 轮播图组件
 * @props:
 *  - valueList: 数据列表 必填 最少3个
 *  - interval: 轮播间隔时间 默认5000ms
 *  - height: 轮播高度 默认400px
 */
const props = defineProps({
  valueList: {
    type: Array,
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
const screenWidth = ref(window.innerWidth)

const handleResize = () => {
  screenWidth.value = window.innerWidth
  adjustCarouselItems()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  adjustCarouselItems()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

// 当前元素左边 下标
const prevs = ref(props.valueList.length - 1)
// 当前元素右边 下标
const nexts = ref(1)

function change(current) {
  const l = props.valueList.length - 1
  if (current === 0) {
    prevs.value = l
    nexts.value = 1
  } else {
    prevs.value = current - 1
    nexts.value = current === l ? 0 : current + 1
  }
  adjustCarouselItems()
}

function adjustCarouselItems() {
  nextTick(() => {
    const lefts = document.getElementsByClassName(`class${prevs.value}`)[0]
    const rights = document.getElementsByClassName(`class${nexts.value}`)[0]
    if (lefts) {
      lefts.style.transform = `translateX(-${55}%)`
    }
    if (rights) {
      rights.style.transform = `translateX(${155}%)`
    }
  })
}
</script>

<style scoped lang="scss"></style>
