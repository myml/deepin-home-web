<template>
  <div>
    <AdminTabBar :active-name="activeName" @clicked="handleClick" />
    <el-form class="mt-3" label-width="100">
      <el-form-item label="标题" size="large">
        <el-input v-model="apps.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="内容" size="large">
        <el-input
          v-model="apps.content"
          type="textarea"
          placeholder="请输入内容" />
      </el-form-item>

      <div
        v-for="(card, index) in apps.cards"
        :key="index"
        label-width="100"
        class="mt-3 border border-[--website-layer-card-border] p-4 rounded-lg shadow-md">
        <el-form-item label="标题">
          <el-input v-model="card.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="card.content"
            type="textarea"
            placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="应用列表">
          <div class="w-full grid grid-cols-3 rounded-sm overflow-hidden">
            <div
              v-for="(list, index) in card.list"
              :key="index"
              class="p-5 border border-[--website-layer-card-border] border-solid">
              <el-form label-width="80">
                <el-form-item label="应用名称">
                  <el-input v-model="list.title" placeholder="请输入标题" />
                </el-form-item>
                <el-form-item label="应用图标" class="mt-3">
                  <el-input v-model="list.image" placeholder="请输入图片" />
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-form-item>
      </div>
      <el-form-item class="mt-2">
        <el-button type="primary" @click="saveApps">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Apps } from '@/api/model'
import { ElMessage } from 'element-plus'

const adminStore = useAdminStore()

const asyncData = async () => {
  loading.value = true
  await adminStore.getAdmin(activeName.value)
  if (adminStore.admin.homeConfig) {
    apps.value = adminStore.admin.homeConfig?.apps
    loading.value = false
  }
}
const loading = ref(false)
const activeName = ref<'zh' | 'en'>('zh')
const apps = ref<Apps>({} as Apps)

asyncData()

const handleClick = (tab: 'zh' | 'en') => {
  activeName.value = tab
  asyncData()
}

const saveApps = () => {
  if (!apps.value.title || !apps.value.content) {
    ElMessage.error('标题和内容不能为空')
    return
  }
  if (
    apps.value.cards.some(
      card =>
        !card.title ||
        !card.content ||
        card.list.some(list => !list.title || !list.image)
    )
  ) {
    ElMessage.error('卡片标题、内容、应用名称、应用图标不能为空')
    return
  }
  adminStore.setHomeConfig(activeName.value, 'apps', apps.value)
  ElMessage.success('保存成功')
}
</script>
