<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="中文" name="chinese">
      <el-form>
        <el-form-item label="标题">
          <el-input v-model="seo.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="语言">
          <el-input v-model="seo.lang" placeholder="请输入语言"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            v-model="seo.description"
            type="textarea"
            placeholder="请输入描述"
          ></el-input>
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
              @click="showAddKeywordDialog"
              effect="plain"
              class="cursor-pointer"
              >+ 添加</el-tag
            >
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveSeo">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="英文" name="english">
      <el-form>
        <el-form-item label="标题">
          <el-input v-model="seo.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="语言">
          <el-input v-model="seo.lang" placeholder="请输入语言"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            v-model="seo.description"
            type="textarea"
            placeholder="请输入描述"
          ></el-input>
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
              @click="showAddKeywordDialog"
              effect="plain"
              class="cursor-pointer"
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
    align-center
  >
    <el-form label-width="auto">
      <el-form-item label="标签名称">
        <el-input
          v-model="addKeywordTitle"
          placeholder="请输入标签名称"
        ></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="addKeywordDialogVisiable = false">取消</el-button>
        <el-button type="primary" @click="addKeyword"> 添加 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import type { Seo } from '@/api/model'
import { ref } from 'vue'
import { ElMessage, type TabsPaneContext } from 'element-plus'

if (!localStorage.getItem('seo')) {
  localStorage.setItem(
    'seo',
    JSON.stringify({
      title: 'deepin  - 基于Linux的开源国产操作系统',
      lang: 'zh',
      description:
        '作为国内知名开源操作系统团队，deepin以提供安全可靠、美观易用的国产操作系统与开源解决方案为目标，满足全球用户不同的应用场景，给用户提供一种更好的选择。',
      keywords: [
        'deepin',
        'Linux',
        '电脑系统',
        '操作系统',
        '国产操作系统',
        '电脑操作系统',
        '国产系统',
        'Linux发行版',
        '开源软件',
        '开源社区',
        '开源中国'
      ]
    })
  )
}

const activeName = ref('chinese')
const seo = ref<Seo>(JSON.parse(localStorage.getItem('seo') || '{}'))
const addKeywordDialogVisiable = ref(false)
const addKeywordTitle = ref('')

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.label
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
  localStorage.setItem('seo', JSON.stringify(seo.value))
  ElMessage.success('保存成功')
}
</script>
