<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      ref="elTabPaneRef"
      v-loading="loading"
      class="min-h-[80vh] py-4"
      label="中文"
      name="zh">
      <admin-carouselCard
        v-if="carouselList.cards"
        v-model:cards="carouselList.cards"
        @save="saveCarousel" />
    </el-tab-pane>
    <el-tab-pane
      v-loading="loading"
      label="英文"
      class="min-h-[80vh] py-4"
      name="en">
      <admin-carouselCard
        v-if="carouselList.cards"
        v-model:cards="carouselList.cards"
        @save="saveCarousel" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { Carousel } from '@/api/model'
import { ref } from 'vue'
import { ElMessage, type TabsPaneContext } from 'element-plus'

const adminStore = useAdminStore()
const asyncData = async () => {
  loading.value = true
  await adminStore.getAdmin(activeName.value)
  if (adminStore.admin.homeConfig) {
    carouselList.value = adminStore.admin.homeConfig?.carousel
    loading.value = false
  }
}
const loading = ref(false)
const carouselList = ref<Carousel>({} as Carousel)
const activeName = ref('zh')
const elTabPaneRef = ref<HTMLElement>()
asyncData()

const saveCarousel = () => {
  adminStore.setHomeConfig(activeName.value, 'carousel', carouselList.value)
  ElMessage.success('保存配置成功')
}

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.name as string
  asyncData()
}
</script>
