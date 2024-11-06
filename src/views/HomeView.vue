<template>
  <main>
    <NCarousel :value-list="imageList" style="margin-top: 20px">
      <template #default="val">
        <div style="width: 100%; height: 100%; overflow: hidden; border-radius: 20px;">
          <img :src="val.value" style="width: 100%; height: 100%; object-fit: cover;" alt=""/>
        </div>
      </template>
    </NCarousel>
    <h1>{{ t('home.hello') }}</h1>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import NCarousel from '@/components/nCarousel.vue'

const imageList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
]
const { t } = useI18n()
</script>
