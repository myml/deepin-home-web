<template>
  <swiper
    :modules="[EffectCards, Autoplay]"
    :effect="'cards'"
    :grab-cursor="true"
    :loop="true"
    :autoplay="{
      delay: interval,
      disableOnInteraction: false
    }"
    class="w-full"
    :style="{ height }"
    @slide-change="handleSlideChange">
    <swiper-slide
      v-for="(item, index) in filterExpired()"
      :key="index"
      class="rounded-2xl overflow-hidden">
      <div class="w-full h-full relative font-semibold">
        <img
          :src="item.image"
          alt="carousel"
          class="w-full h-full object-fill rounded-2xl"
          @click="openUrl(item.image_link, index)" />
        <span
          v-if="item.title"
          class="absolute left-[53px] top-[183px] text-3xl text-[--website-layer-card-background]">
          {{ item.title }}
        </span>
        <span
          v-if="item.content"
          class="absolute left-[53px] top-[237px] text-xl text-[--website-layer-card-background] max-w-[370px]">
          {{ item.content }}
        </span>
        <div
          v-if="item.links.length"
          class="absolute left-[53px] bottom-[33px] flex gap-2">
          <div
            v-for="(link, linkIndex) in item.links"
            :key="linkIndex"
            class="px-[22px] py-3 text-lg text-[--website-font-primary] border border-[--website-tag-border] bg-[--website-layer-card-background] rounded-[39px]"
            @click="openUrl(link.url)">
            {{ link.title }}
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards, Autoplay } from 'swiper/modules'
import type { CarouselCard } from '@/api/model'
import { dayjs } from 'element-plus'

// 引入 Swiper 样式
import 'swiper/css'
import 'swiper/css/effect-cards'

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

const current = ref(0)

const handleSlideChange = (swiper: SwiperType) => { // 使用具体的 Swiper 类型替代 any
  current.value = swiper.activeIndex
}

const openUrl = (url: string, index: number = -1) => {
  if (index !== current.value) return
  if (!url) return
  window.open(url)
}

const filterExpired = () => {
  return props.valueList.filter(item => {
    const now = dayjs()
    return now.isAfter(item.online_time) || now.isBefore(item.downline_time)
  })
}
</script>

<style lang="scss" scoped>
.swiper {
  width: min(1024px, 90vw);
  margin: 0 auto;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
