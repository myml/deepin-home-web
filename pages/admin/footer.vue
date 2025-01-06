<template>
  <div>
    <AdminTabBar :active-name="activeName" @clicked="handleClick" />
    <el-form
      v-if="footer.navs"
      :model="footer.navs"
      class="mt-4 mr-5"
      label-width="100">
      <!-- Navs Section -->
      <el-form-item>
        <template #label>
          <div class="font-bold text-lg">导航链接</div>
        </template>
        <el-button type="primary" @click="addNav">添加导航</el-button>
        <el-collapse v-model="activeNavs" class="my-2 w-full">
          <el-collapse-item
            v-for="(nav, navIndex) in footer.navs"
            :key="navIndex">
            <template #title>
              <div class="font-bold px-2">{{ nav.title || '未命名导航' }}</div>
            </template>
            <el-form-item label="标题">
              <el-input v-model="nav.title" placeholder="请输入标题" />
            </el-form-item>
            <el-form-item label="链接" class="mt-2">
              <el-table :data="nav.links" border>
                <el-table-column label="文本">
                  <template #default="{ row }">
                    <el-input v-model="row.text" placeholder="请输入文本" />
                  </template>
                </el-table-column>
                <el-table-column label="URL">
                  <template #default="{ row }">
                    <el-input v-model="row.url" placeholder="请输入URL" />
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template #default="{ $index }">
                    <el-button
                      type="danger"
                      @click="removeLink(navIndex, $index)"
                      >删除</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>

            <el-button
              type="primary"
              class="ml-24 my-2"
              @click="addLink(navIndex)"
              >添加链接</el-button
            >
            <el-button
              type="danger"
              class="ml-24 my-2"
              @click="removeNav(navIndex)"
              >删除导航</el-button
            >
          </el-collapse-item>
        </el-collapse>
      </el-form-item>

      <!-- QR Section -->
      <el-form-item>
        <template #label>
          <div class="font-bold text-lg">二维码</div>
        </template>
        <el-form-item label="标题" label-width="40">
          <el-input v-model="footer.qr.title" placeholder="请输入标题" />
        </el-form-item>
        <el-button type="primary" class="ml-2" @click="addQR"
          >添加二维码</el-button
        >
        <el-table :data="footer.qr.imgs" border class="mt-2">
          <el-table-column label="文本">
            <template #default="{ row }">
              <el-input v-model="row.text" placeholder="请输入文本" />
            </template>
          </el-table-column>
          <el-table-column label="URL">
            <template #default="{ row }">
              <el-input v-model="row.url" placeholder="请输入URL" />
            </template>
          </el-table-column>
          <el-table-column label="图片">
            <template #default="{ row }">
              <el-input v-model="row.img" placeholder="请输入图片URL" />
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ $index }">
              <el-button type="danger" @click="removeQR($index)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="saveFooter">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { Footer } from '@/api/model'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const adminStore = useAdminStore()

const asyncData = async () => {
  loading.value = true
  await adminStore.getAdmin(activeName.value)
  if (adminStore.admin.homeConfig) {
    footer.value = adminStore.admin.homeConfig?.footer
    loading.value = false
  }
}

const loading = ref(false)
const footer = ref<Footer>({} as Footer)
const activeName = ref<'zh' | 'en'>('zh')
const activeNavs = ref([])

asyncData()

const handleClick = (tab: 'zh' | 'en') => {
  activeName.value = tab
  asyncData()
}

const addNav = () => {
  footer.value.navs.push({
    title: '',
    links: []
  })
}

const addLink = (navIndex: number) => {
  footer.value.navs[navIndex].links.push({
    text: '',
    url: ''
  })
}

const removeLink = (navIndex: number, linkIndex: number) => {
  footer.value.navs[navIndex].links.splice(linkIndex, 1)
}

const removeNav = (navIndex: number) => {
  footer.value.navs.splice(navIndex, 1)
}

const addQR = () => {
  footer.value.qr.imgs.push({
    text: '',
    url: '',
    img: ''
  })
}

const removeQR = (index: number) => {
  footer.value.qr.imgs.splice(index, 1)
}

const saveFooter = () => {
  // 检查是否有空值
  for (const nav of footer.value.navs) {
    if (nav.title.trim() === '') {
      ElMessage.warning('导航标题不能为空')
      return
    }
    for (const link of nav.links) {
      if (link.text.trim() === '' || link.url.trim() === '') {
        ElMessage.warning('链接文本和URL不能为空')
        return
      }
    }
  }
  try {
    adminStore.setHomeConfig(activeName.value, 'footer', footer.value)
    ElMessage.success('保存成功')
  } catch (error) {
    ElMessage.error('保存失败: ' + error)
  }
}
</script>
