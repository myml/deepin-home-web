<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      v-loading="loading"
      label="中文"
      class="min-h-[80vh] py-4"
      name="zh">
      <el-form v-if="footer.navs" label-width="100">
        <el-form-item label="导航">
          <div
            v-for="(nav, index) in footer.navs"
            :key="index"
            class="w-full mt-3 border border-[--website-layer-card-border] p-4 rounded-lg shadow-md">
            <el-form-item label="标题">
              <el-input v-model="nav.title" placeholder="请输入标题" />
            </el-form-item>
            <el-form-item label="链接" class="mt-2">
              <div class="w-full grid grid-cols-4 rounded-sm overflow-hidde">
                <div
                  v-for="(link, linkIndex) in nav.links"
                  :key="linkIndex"
                  class="p-5 border border-[--website-layer-card-border] border-solid">
                  <el-form label-width="60">
                    <el-form-item label="文本">
                      <el-input v-model="link.text" placeholder="请输入文本" />
                    </el-form-item>
                    <el-form-item label="URL" class="mt-2">
                      <el-input v-model="link.url" placeholder="请输入URL" />
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-form-item>
          </div>
        </el-form-item>
        <el-form-item label="二维码">
          <div class="w-full grid grid-cols-4 rounded-sm overflow-hidden">
            <div
              v-for="(qr, index) in footer.qr.imgs"
              :key="index"
              class="p-5 border border-[--website-layer-card-border] border-solid">
              <el-form label-width="100">
                <el-form-item label="文本">
                  <el-input v-model="qr.text" placeholder="请输入文本" />
                </el-form-item>
                <el-form-item label="二维码链接" class="mt-2">
                  <el-input v-model="qr.img" placeholder="请输入图片" />
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveFooter">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane
      v-loading="loading"
      label="英文"
      class="min-h-[80vh] py-4"
      name="en">
      <el-form v-if="footer.navs" label-width="100">
        <el-form-item label="导航">
          <div
            v-for="(nav, index) in footer.navs"
            :key="index"
            class="w-full mt-3 border border-[--website-layer-card-border] p-4 rounded-lg shadow-md">
            <el-form-item label="标题">
              <el-input v-model="nav.title" placeholder="请输入标题" />
            </el-form-item>
            <el-form-item label="链接" class="mt-2">
              <div class="w-full grid grid-cols-4 rounded-sm overflow-hidde">
                <div
                  v-for="(link, linkIndex) in nav.links"
                  :key="linkIndex"
                  class="p-5 border border-[--website-layer-card-border] border-solid">
                  <el-form label-width="60">
                    <el-form-item label="文本">
                      <el-input v-model="link.text" placeholder="请输入文本" />
                    </el-form-item>
                    <el-form-item label="URL" class="mt-2">
                      <el-input v-model="link.url" placeholder="请输入URL" />
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-form-item>
          </div>
        </el-form-item>
        <el-form-item label="二维码">
          <div class="w-full grid grid-cols-4 rounded-sm overflow-hidden">
            <div
              v-for="(qr, index) in footer.qr.imgs"
              :key="index"
              class="p-5 border border-[--website-layer-card-border] border-solid">
              <el-form label-width="100">
                <el-form-item label="文本">
                  <el-input v-model="qr.text" placeholder="请输入文本" />
                </el-form-item>
                <el-form-item label="二维码链接" class="mt-2">
                  <el-input v-model="qr.img" placeholder="请输入图片" />
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveFooter">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { Footer } from '@/api/model'
import { ref } from 'vue'
import { ElMessage, type TabsPaneContext } from 'element-plus'

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
const activeName = ref('zh')

asyncData()

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.name as string
  asyncData()
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
  adminStore.setHomeConfig(activeName.value, 'footer', footer.value)
  ElMessage.success('保存成功')
}
</script>
