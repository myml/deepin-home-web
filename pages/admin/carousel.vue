<template>
  <div>
    <AdminTabBar :active-name="activeName" @clicked="handleClick" />
    <el-row class="mb-4 mt-3">
      <el-col :span="24">
        <el-button type="primary" size="large" @click="addCarousel"
          >添加轮播图</el-button
        >
      </el-col>
    </el-row>
    <el-row class="bg-[#E6E8EB] py-2 border">
      <el-col :span="2" class="px-2 font-bold text-lg">
        <span>序号</span>
      </el-col>
      <el-col :span="4" class="px-2 font-bold text-lg">
        <span>标题</span>
      </el-col>
      <el-col :span="4" class="px-2 font-bold text-lg">
        <span>描述</span>
      </el-col>
      <el-col :span="4" class="px-2 font-bold text-lg">
        <span>状态</span>
      </el-col>
      <el-col :span="4" class="px-2 font-bold text-lg">
        <span>图片</span>
      </el-col>
      <el-col :span="6" class="px-2 font-bold text-lg">
        <span>操作</span>
      </el-col>
    </el-row>
    <el-row
      v-for="(carousel, index) in carouselList.cards"
      :key="index"
      class="py-2 border">
      <el-col :span="2" class="px-2 items-center" style="display: flex">
        <span>{{ index + 1 }}</span>
      </el-col>
      <el-col :span="4" class="px-2 items-center" style="display: flex">
        <span>{{ carousel.title || '未设置' }}</span>
      </el-col>
      <el-col :span="4" class="px-2 items-center" style="display: flex">
        <span>{{ carousel.content || '未设置' }}</span>
      </el-col>
      <el-col :span="4" class="px-2 items-center" style="display: flex">
        <span>{{
          getStatus(carousel.online_time, carousel.downline_time)
        }}</span>
      </el-col>
      <el-col :span="4" class="px-2 items-center" style="display: flex">
        <img
          v-if="carousel.image"
          :src="carousel.image"
          class="w-full"
          referrerpolicy="no-referrer" />
        <span v-else class="text-red">未设置图片</span>
      </el-col>
      <el-col :span="6" class="px-2 items-center" style="display: flex">
        <el-button type="primary" @click="openEditDialog(index)"
          >编辑</el-button
        >
        <el-button type="success" :disabled="!index" @click="moveUp(index)"
          >上移</el-button
        >
        <el-button
          type="success"
          :disabled="index === carouselList.cards.length - 1"
          @click="moveDown(index)"
          >下移</el-button
        >
        <el-button type="danger" @click="removeBanner(index)">删除</el-button>
      </el-col>
    </el-row>
    <el-row class="mt-4">
      <el-button
        type="primary"
        size="large"
        :disabled="!isSaveDisabled"
        @click="saveCarousel"
        >保存</el-button
      >
    </el-row>
    <el-dialog v-model="editDialogVisible" title="编辑轮播图">
      <el-form
        ref="editForm"
        :model="editFormData"
        :rules="rules"
        label-width="120px">
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="editFormData.title"
            placeholder="请输入标题"
            clearable
            :style="{ width: '100%' }"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="content">
          <el-input
            v-model="editFormData.content"
            placeholder="请输入描述"
            clearable
            :style="{ width: '100%' }"></el-input>
        </el-form-item>
        <el-form-item label="图片地址" prop="image">
          <el-input
            v-model="editFormData.image"
            placeholder="请输入图片地址"
            clearable
            :style="{ width: '100%' }">
          </el-input>
        </el-form-item>
        <el-form-item label="轮播图超链接" prop="image_link">
          <el-input
            v-model="editFormData.image_link"
            placeholder="请输入轮播图超链接"
            clearable
            :style="{ width: '100%' }">
          </el-input>
        </el-form-item>
        <el-form-item label="轮播间隔" prop="interval">
          <el-input
            v-model="editFormData.interval"
            placeholder="请输入轮播间隔（毫秒）"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="上线时间" prop="online_time">
          <el-date-picker
            v-model="editFormData.online_time"
            type="datetime"
            placeholder="请选择上线时间"
            clearable></el-date-picker>
        </el-form-item>
        <el-form-item label="下线时间" prop="downline_time">
          <el-date-picker
            v-model="editFormData.downline_time"
            type="datetime"
            placeholder="请选择下线时间"
            clearable></el-date-picker>
        </el-form-item>
        <el-form-item label="扩展按钮" prop="links">
          <el-row class="bg-[#f5f7fa] p-2 w-full">
            <el-col :span="10">
              <span>名称</span>
            </el-col>
            <el-col :span="10">
              <span>链接</span>
            </el-col>
            <el-col :span="4">
              <span
                class="cursor-pointer hover:bg-slate-200 rounded-full p-2"
                @click="addLink"
                >➕</span
              >
            </el-col>
          </el-row>
          <el-row
            v-for="(link, linkIndex) in editFormData.links"
            :key="linkIndex"
            class="p-2 w-full">
            <el-col :span="10" class="pr-2">
              <el-input
                v-model="link.title"
                placeholder="请输入名称"
                clearable></el-input>
            </el-col>
            <el-col :span="10" class="pr-2">
              <el-input
                v-model="link.url"
                placeholder="请输入链接"
                clearable></el-input>
            </el-col>
            <el-col :span="4">
              <span
                class="cursor-pointer hover:bg-slate-200 rounded-full p-2"
                @click="removeLink(linkIndex)"
                >➖</span
              >
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <template #footer>
        <div>
          <el-button @click="closeEditDialog">取消</el-button>
          <el-button type="primary" @click="saveEditConfig">保存</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { Carousel, CarouselCard } from '@/api/model'
import { ref, reactive } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'

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
const activeName = ref<'zh' | 'en'>('zh')
asyncData()

const saveCarousel = () => {
  // 检查image字段是否有空的
  for (const card of carouselList.value.cards) {
    if (card.image === '') {
      ElMessage.warning('图片地址不能为空')
      return
    }
  }
  adminStore.setHomeConfig(activeName.value, 'carousel', carouselList.value)
  ElMessage.success('保存配置成功')
  isSaveDisabled.value = false
}

const handleClick = (tab: 'zh' | 'en') => {
  activeName.value = tab
  asyncData()
}

const editForm = ref<FormInstance>()
const editDialogVisible = ref(false)
const editFormIndex = ref(0)
const editFormData = reactive<CarouselCard>({
  title: '',
  content: '',
  image: '',
  image_link: '',
  interval: 3000,
  online_time: '',
  downline_time: '',
  links: []
})
const rules = reactive({
  title: [],
  content: [],
  image: [
    {
      required: true,
      message: '请输入图片地址',
      trigger: 'blur'
    }
  ],
  image_link: [],
  interval: [],
  online_time: [],
  downline_time: [],
  links: []
})

const openEditDialog = (index: number) => {
  editFormIndex.value = index
  editFormData.title = carouselList.value.cards[index].title
  editFormData.content = carouselList.value.cards[index].content
  editFormData.image = carouselList.value.cards[index].image
  editFormData.image_link = carouselList.value.cards[index].image_link
  editFormData.interval = carouselList.value.cards[index].interval
  editFormData.online_time = carouselList.value.cards[index].online_time
  editFormData.downline_time = carouselList.value.cards[index].downline_time
  editFormData.links = carouselList.value.cards[index].links
  editDialogVisible.value = true
}
const closeEditDialog = () => {
  editDialogVisible.value = false
}

const saveEditConfig = () => {
  if (!editForm.value) return
  editForm.value.validate().then(() => {
    carouselList.value.cards[editFormIndex.value].title = editFormData.title
    carouselList.value.cards[editFormIndex.value].content = editFormData.content
    carouselList.value.cards[editFormIndex.value].image = editFormData.image
    carouselList.value.cards[editFormIndex.value].image_link =
      editFormData.image_link
    carouselList.value.cards[editFormIndex.value].interval =
      editFormData.interval
    carouselList.value.cards[editFormIndex.value].online_time =
      editFormData.online_time
    carouselList.value.cards[editFormIndex.value].downline_time =
      editFormData.downline_time
    carouselList.value.cards[editFormIndex.value].links = editFormData.links
    editFormIndex.value = 0
    editDialogVisible.value = false
    isSaveDisabled.value = true
  })
}

const addLink = () => {
  editFormData.links.push({
    title: '',
    url: ''
  })
}

const removeLink = (index: number) => {
  editFormData.links.splice(index, 1)
}

const getStatus = (onlineTime: string, offlineTime: string) => {
  console.log(onlineTime, offlineTime)
  const now = new Date()
  const onlineDate = new Date(onlineTime)
  const offlineDate = new Date(offlineTime)
  if (!onlineTime && !offlineTime) {
    return '⚠️ 未设置时间(将始终显示)'
  }

  if (!onlineTime && now < offlineDate) {
    return '✅ 在线'
  }

  if (!offlineTime && now > onlineDate) {
    return '✅ 始终在线(未设置下线时间)'
  }

  if (!offlineTime && now < onlineDate) {
    return '⚠️ 还未上线'
  }
  if (now >= onlineDate && now <= offlineDate) {
    return '✅ 在线'
  } else {
    return '❌ 下线'
  }
}

// 底部保存按钮是否禁用
const isSaveDisabled = ref(false)

// 轮播图上移
const moveUp = (index: number) => {
  const temp = carouselList.value.cards[index]
  carouselList.value.cards[index] = carouselList.value.cards[index - 1]
  carouselList.value.cards[index - 1] = temp
  isSaveDisabled.value = true
}

// 轮播图下移
const moveDown = (index: number) => {
  const temp = carouselList.value.cards[index]
  carouselList.value.cards[index] = carouselList.value.cards[index + 1]
  carouselList.value.cards[index + 1] = temp
  isSaveDisabled.value = true
}

// 移除轮播图
const removeBanner = (index: number) => {
  carouselList.value.cards.splice(index, 1)
  isSaveDisabled.value = true
}

const addCarousel = () => {
  carouselList.value.cards.push({
    title: '',
    content: '',
    image: '',
    image_link: '',
    interval: 3000,
    online_time: '',
    downline_time: '',
    links: []
  })
  isSaveDisabled.value = true
}
</script>
