<template>
  <el-form label-width="130px" status-icon size="large">
    <el-card v-for="(card, cardIndex) in cards" :key="cardIndex" class="my-3">
      <el-form-item>
        <span class="text-lg">轮播图{{ cardIndex + 1 }}</span>
      </el-form-item>
      <div class="flex my-4 items-center text-nowrap">
        <div class="shrink-0 text-right pr-3 text-[#606262] w-[130px]">
          标题
        </div>
        <el-input
          v-model="card.title"
          class="max-w-52"
          placeholder="请输入标题"
        />
        <div class="text-[#606262] px-3">描述</div>
        <el-input v-model="card.content" placeholder="请输入描述"/>
      </div>
      <el-form-item
        label="图片地址"
        :rules="[
          { required: true, message: '请输入图片地址', trigger: 'blur' }
        ]"
      >
        <el-input v-model="card.image" placeholder="请输入图片地址"/>
      </el-form-item>
      <el-form-item label="图片超链接">
        <el-input
          v-model="card.image_link"
          placeholder="请输入图片超链接"
        />
      </el-form-item>
      <el-form-item label="轮播间隔（毫秒）"
        ><el-input v-model="card.interval" placeholder="请输入轮播间隔"
      /></el-form-item>
      <el-form-item label-width="100">
        <el-form-item label="上线时间">
          <el-date-picker
            v-model="card.online_time"
            type="datetime"
            placeholder="选择上线时间"
          />
        </el-form-item>
        <el-form-item label="下线时间">
          <el-date-picker
            v-model="card.downline_time"
            type="datetime"
            placeholder="选择下线时间"
          />
        </el-form-item>
      </el-form-item>
      <div class="my-4 flex items-center">
        <span class="shrink-0 w-[130px] text-right text-[#606262] pr-3"
          >按钮</span
        >
        <div class="flex items-center gap-2">
          <el-tag
            v-for="(tag, tagIndex) in card.links"
            :key="tagIndex"
            closable
            disable-transitions
            class="cursor-pointer"
            @close="closeTag(cardIndex, tagIndex)"
          >
            {{ tag.title }}
          </el-tag>
          <el-tag
            effect="plain"
            class="cursor-pointer"
            @click="showAddTagDialog(cardIndex)"
          >
            + 添加
          </el-tag>
        </div>
      </div>
      <el-form-item>
        <el-button v-if="cardIndex !== 0" @click="moveUp(cardIndex)"
          >上移</el-button
        >
        <el-button
          v-if="cardIndex !== cards.length - 1"
          @click="moveDown(cardIndex)"
          >下移</el-button
        >
        <el-button type="danger" @click="removeBanner(cardIndex)"
          >删除</el-button
        >
      </el-form-item>
    </el-card>
    <el-form-item>
      <el-button type="primary" size="large" @click="addBannerCard"
        >添加轮播图</el-button
      >
      <el-button type="primary" size="large" class="block" @click="saveCarousel"
        >保存</el-button
      >
    </el-form-item>
  </el-form>
  <el-dialog
    v-model="addTagDialogVisible"
    title="添加按钮"
    width="500"
    align-center
  >
    <el-form v-model="addTagForm" label-width="100">
      <el-form-item label="按钮文本">
        <el-input
          v-model="addTagForm.title"
          placeholder="请输入按钮文本"
        />
      </el-form-item>
      <el-form-item label="按钮超链接">
        <el-input
          v-model="addTagForm.url"
          placeholder="请输入按钮超链接"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="addTagDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addTag"> 添加 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { CarouselCard } from '@/api/model'
const cards = defineModel<CarouselCard[]>('cards', { required: true })
const emits = defineEmits<{
  save: []
}>()

const addBannerCard = () => {
  // 添加轮播图
  cards.value.push({
    interval: 3000,
    title: '',
    content: '',
    image: '',
    image_link: '',
    online_time: '',
    downline_time: '',
    links: []
  })
}

const saveCarousel = () => {
  // 检查image字段是否有空的
  for (const card of cards.value) {
    if (card.image === '') {
      ElMessage.warning('图片地址不能为空')
      return
    }
  }
  emits('save')
}

const closeTag = (cardIndex: number, tagIndex: number) => {
  cards.value[cardIndex].links.splice(tagIndex, 1)
}

const addTagDialogVisible = ref(false)
const addTagCardIndex = ref(-1)
const addTagForm = ref({
  title: '',
  url: ''
})

const showAddTagDialog = (index: number) => {
  addTagForm.value = {
    title: '',
    url: ''
  }
  addTagCardIndex.value = index
  addTagDialogVisible.value = true
}

// 轮播图上移
const moveUp = (index: number) => {
  const temp = cards.value[index]
  cards.value[index] = cards.value[index - 1]
  cards.value[index - 1] = temp
}

// 轮播图下移
const moveDown = (index: number) => {
  const temp = cards.value[index]
  cards.value[index] = cards.value[index + 1]
  cards.value[index + 1] = temp
}

// 移除单个轮播图
const removeBanner = (index: number) => {
  ElMessageBox.confirm('确定要删除这个轮播图吗?', '警告', {
    confirmButtonText: '删除',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    cards.value.splice(index, 1)
  })
}

const addTag = () => {
  // 添加标签
  cards.value[addTagCardIndex.value].links?.push({
    title: addTagForm.value.title,
    url: addTagForm.value.url
  })
  addTagDialogVisible.value = false
  addTagCardIndex.value = -1
}
</script>
