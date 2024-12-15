<template>
  <div>
    <el-tabs v-model="activeName" class="p-3" @tab-click="handleClick">
      <el-tab-pane
        v-loading="loading"
        class="min-h-[80vh] p-3"
        label="中文"
        name="zh">
        <el-form>
          <el-form-item label="标题">
            <el-input v-model="seo.title" placeholder="请输入标题" />
          </el-form-item>
          <el-form-item label="语言">
            <el-input v-model="seo.lang" placeholder="请输入语言" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              v-model="seo.description"
              type="textarea"
              placeholder="请输入描述" />
          </el-form-item>
          <el-form-item label="关键字">
            <div class="flex items-center gap-2 flex-wrap">
              <el-tag
                v-for="(keyword, tagIndex) in seo.keywords"
                :key="tagIndex"
                class="cursor-pointer"
                closable
                @close="seo.keywords.splice(tagIndex, 1)"
                >{{ keyword }}</el-tag
              >
              <el-tag
                effect="plain"
                class="cursor-pointer"
                @click="showAddKeywordDialog"
                >+ 添加</el-tag
              >
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveSeo">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane
        v-loading="loading"
        class="min-h-[80vh] p-3"
        label="英文"
        name="en">
        <el-form>
          <el-form-item label="标题">
            <el-input v-model="seo.title" placeholder="请输入标题" />
          </el-form-item>
          <el-form-item label="语言">
            <el-input v-model="seo.lang" placeholder="请输入语言" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              v-model="seo.description"
              type="textarea"
              placeholder="请输入描述" />
          </el-form-item>
          <el-form-item label="关键字">
            <div class="flex items-center gap-2 flex-wrap">
              <el-tag
                v-for="(keyword, tagIndex) in seo.keywords"
                :key="tagIndex"
                class="cursor-pointer"
                closable
                @close="seo.keywords.splice(tagIndex, 1)"
                >{{ keyword }}</el-tag
              >
              <el-tag
                effect="plain"
                class="cursor-pointer"
                @click="showAddKeywordDialog"
                >+ 添加</el-tag
              >
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="saveSeo">保存</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

    <el-dialog
      v-model="addKeywordDialogVisiable"
      title="添加按钮"
      width="500"
      align-center>
      <el-form label-width="100">
        <el-form-item label="标签名称">
          <el-input v-model="addKeywordTitle" placeholder="请输入标签名称" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="addKeywordDialogVisiable = false">取消</el-button>
          <el-button type="primary" @click="addKeyword"> 添加 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import type { Seo } from '@/api/model'
import { ref } from 'vue'
import { ElMessage, type TabsPaneContext } from 'element-plus'

const adminStore = useAdminStore()
const asyncData = async () => {
  loading.value = true
  await adminStore.getAdmin(activeName.value)
  if (adminStore.admin.homeConfig) {
    seo.value = adminStore.admin.homeConfig?.seo
    loading.value = false
  }
}
const loading = ref(false)
const activeName = ref('zh')
const seo = ref<Seo>({} as Seo)
const addKeywordDialogVisiable = ref(false)
const addKeywordTitle = ref('')
asyncData()

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.name as string
  asyncData()
}

const showAddKeywordDialog = () => {
  addKeywordTitle.value = ''
  addKeywordDialogVisiable.value = true
}

const addKeyword = () => {
  if (addKeywordTitle.value.trim() === '') {
    ElMessage.warning('标签名称不能为空')
    return
  }
  seo.value.keywords.push(addKeywordTitle.value)
  addKeywordDialogVisiable.value = false
}

const saveSeo = () => {
  adminStore.setHomeConfig(activeName.value, 'seo', seo.value)
  ElMessage.success('保存成功')
}
</script>
