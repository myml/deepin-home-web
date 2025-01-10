<template>
  <div>
    <AdminTabBar :active-name="activeName" @clicked="handleClick" />
    <el-form class="mt-3" label-width="70">
      <el-form-item label="标题" size="large">
        <el-input v-model="feature.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="内容" size="large">
        <el-input
          v-model="feature.content"
          type="textarea"
          placeholder="请输入内容" />
      </el-form-item>
      <el-form
        v-for="(card, index) in feature.cards"
        :key="index"
        label-width="60"
        class="mt-3 border border-[--website-layer-card-border] p-4 rounded-lg shadow-md">
        <el-check-tag checked type="success" disabled class="mb-3">{{
          index + 1
        }}</el-check-tag>
        <el-form-item label="标题">
          <el-input v-model="card.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="card.content"
            type="textarea"
            placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="图片">
          <el-input v-model="card.image" placeholder="请输入图片" />
        </el-form-item>
        <el-form-item label="封面">
          <el-input v-model="card.cover" placeholder="请输入封面" />
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="card.url" placeholder="请输入链接" />
        </el-form-item>
      </el-form>
      <el-form-item class="mt-3">
        <el-button
          type="primary"
          size="large"
          class="block"
          @click="saveFeature"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Feature } from '@/api/model'
import { ElMessage } from 'element-plus'

const adminStore = useAdminStore()

const asyncData = async () => {
  loading.value = true
  await adminStore.getAdmin(activeName.value)
  if (adminStore.admin.homeConfig) {
    feature.value = adminStore.admin.homeConfig?.feature
    loading.value = false
  }
}

const activeName = ref<'zh' | 'en'>('zh')
const loading = ref(false)
const feature = ref<Feature>({} as Feature)
asyncData()

const handleClick = (tab: 'zh' | 'en') => {
  activeName.value = tab
  asyncData()
}

const saveFeature = () => {
  if (!feature.value.title || !feature.value.content) {
    ElMessage.error('标题和内容不能为空')
    return
  }
  if (
    feature.value.cards.some(
      card =>
        !card.title || !card.content || !card.image || !card.cover || !card.url
    )
  ) {
    ElMessage.error('卡片标题、内容、图片、封面、链接不能为空')
    return
  }

  try {
    adminStore.setHomeConfig(activeName.value, 'feature', feature.value)
    ElMessage.success('保存成功')
  } catch (error) {
    ElMessage.error('保存失败: ' + error)
  }
}
</script>
