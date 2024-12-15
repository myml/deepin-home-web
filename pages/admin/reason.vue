<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      v-loading="loading"
      class="min-h-[80vh] py-4"
      label="中文"
      name="zh">
      <el-form label-width="100">
        <el-form-item label="section标题" size="large">
          <el-input v-model="reason.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form
          v-for="(r, cardIndex) in reason.cards"
          :key="cardIndex"
          label-width="40"
          class="my-3 border border-[--website-layer-card-border] p-4 rounded-lg shadow-md">
          <el-check-tag checked type="success" disabled class="mb-3">{{
            cardIndex + 1
          }}</el-check-tag>
          <el-form-item label="标题">
            <el-input v-model="r.title" placeholder="请输入标题" />
          </el-form-item>
          <el-form-item label="描述" class="mb-0">
            <el-input
              v-model="r.content"
              type="textarea"
              placeholder="请输入描述" />
          </el-form-item>
        </el-form>
        <el-form-item>
          <el-button
            type="primary"
            size="large"
            class="block"
            @click="saveReason"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane
      v-loading="loading"
      class="min-h-[80vh] py-4"
      label="英文"
      name="en">
      <el-form label-width="100">
        <el-form-item label="section标题" size="large">
          <el-input v-model="reason.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form
          v-for="(r, cardIndex) in reason.cards"
          :key="cardIndex"
          label-width="40"
          class="my-3 border border-[--website-layer-card-border] p-4 rounded-lg shadow-md">
          <el-check-tag checked type="success" disabled class="mb-3">{{
            cardIndex + 1
          }}</el-check-tag>
          <el-form-item label="标题">
            <el-input v-model="r.title" placeholder="请输入标题" />
          </el-form-item>
          <el-form-item label="描述" class="mb-0">
            <el-input
              v-model="r.content"
              type="textarea"
              placeholder="请输入描述" />
          </el-form-item>
        </el-form>
        <el-form-item>
          <el-button
            type="primary"
            size="large"
            class="block"
            @click="saveReason"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import type { Reason } from '@/api/model'
import { ElMessage } from 'element-plus'

const adminStore = useAdminStore()

const asyncData = async () => {
  loading.value = true
  await adminStore.getAdmin(activeName.value)
  if (adminStore.admin.homeConfig) {
    reason.value = adminStore.admin.homeConfig?.reason
    loading.value = false
  }
}
const loading = ref(false)
const activeName = ref('zh')
const reason = ref<Reason>({} as Reason)
asyncData()

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.name as string
  asyncData()
}

const saveReason = () => {
  // 检查title和content字段是否有空的
  for (const r of reason.value.cards) {
    if (r.title === '' || r.content === '') {
      ElMessage.warning('标题和描述不能为空')
      return
    }
  }
  adminStore.setHomeConfig(activeName.value, 'reason', reason.value)
  ElMessage.success('保存成功')
}
</script>
