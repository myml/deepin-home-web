<template>
  <el-tabs v-model="activeName" class="carousel-tab" @tab-click="handleClick">
    <el-tab-pane label="中文" name="chinese" ref="elTabPaneRef">
      <el-form status-icon size="large">
        <el-card
          v-for="(card, cardIndex) in carouselList.cards"
          :key="cardIndex"
          class="my-3"
        >
          <el-form-item>
            <span class="text-lg">轮播图{{ cardIndex + 1 }}</span>
          </el-form-item>
          <div class="flex gap-2 my-4 items-center text-nowrap">
            <span class="text-[#606262]">标题</span>
            <el-input
              class="max-w-52"
              v-model="card.title"
              placeholder="请输入标题"
            ></el-input>
            <span class="text-[#606262]">描述</span>
            <el-input
              v-model="card.content"
              placeholder="请输入描述"
            ></el-input>
          </div>
          <el-form-item
            label="图片地址"
            :rules="[
              { required: true, message: '请输入图片地址', trigger: 'blur' }
            ]"
          >
            <el-input
              v-model="card.image"
              placeholder="请输入图片地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="图片超链接">
            <el-input
              v-model="card.image_link"
              placeholder="请输入图片超链接"
            ></el-input>
          </el-form-item>
          <el-form-item label="轮播间隔（毫秒）"
            ><el-input v-model="card.interval" placeholder="请输入轮播间隔"
          /></el-form-item>
          <div class="my-4 flex gap-2 items-center">
            <span class="text-[#606262]">按钮</span>
            <div class="flex items-center gap-2">
              <el-tag
                v-for="(tag, tagIndex) in card.links"
                :key="tagIndex"
                closable
                disable-transitions
                @close="closeTag(cardIndex, tagIndex)"
                class="cursor-pointer"
              >
                {{ tag.title }}
              </el-tag>
              <el-tag
                effect="plain"
                @click="showAddTagDialog(cardIndex)"
                class="cursor-pointer"
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
              v-if="cardIndex !== carouselList.cards.length - 1"
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
          <el-button
            type="primary"
            size="large"
            class="block"
            @click="saveCarousel"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="英文" name="english">
      <el-form status-icon size="large">
        <el-card
          v-for="(card, cardIndex) in carouselList.cards"
          :key="cardIndex"
          class="my-3"
        >
          <el-form-item>
            <span class="text-lg">轮播图{{ cardIndex + 1 }}</span>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="card.title" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              v-model="card.content"
              placeholder="请输入描述"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="图片地址"
            :rules="[
              { required: true, message: '请输入图片地址', trigger: 'blur' }
            ]"
          >
            <el-input
              v-model="card.image"
              placeholder="请输入图片地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="图片超链接">
            <el-input
              v-model="card.image_link"
              placeholder="请输入图片超链接"
            ></el-input>
          </el-form-item>

          <el-form-item label="轮播间隔（毫秒）"
            ><el-input v-model="card.interval" placeholder="请输入轮播间隔"
          /></el-form-item>
          <el-form-item label="按钮">
            <div class="flex items-center gap-2">
              <el-tag
                v-for="(tag, tagIndex) in card.links"
                :key="tagIndex"
                closable
                @close="closeTag(cardIndex, tagIndex)"
                class="cursor-pointer"
              >
                {{ tag.title }}
              </el-tag>
              <el-tag
                effect="plain"
                @click="showAddTagDialog(cardIndex)"
                class="cursor-pointer"
              >
                + 添加
              </el-tag>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button v-if="cardIndex !== 0" @click="moveUp(cardIndex)"
              >上移</el-button
            >
            <el-button
              v-if="cardIndex !== carouselList.cards.length - 1"
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
          <el-button
            type="primary"
            size="large"
            class="block"
            @click="saveCarousel"
            >保存</el-button
          >
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
  <el-dialog
    v-model="addTagDialogVisible"
    title="添加按钮"
    width="500"
    align-center
  >
    <el-form v-model="addTagForm">
      <el-form-item label="标签名称">
        <el-input
          v-model="addTagForm.title"
          placeholder="请输入标签名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="标签链接">
        <el-input
          v-model="addTagForm.url"
          placeholder="请输入标签链接"
        ></el-input>
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

<script lang="ts" setup>
import type { Carousel } from '@/api/model'
import { ref } from 'vue'
import { ElMessage, ElMessageBox, type TabsPaneContext } from 'element-plus'

if (!localStorage.getItem('carousel')) {
  localStorage.setItem(
    'carousel',
    JSON.stringify({
      cards: [
        {
          title: 'deepin v23',
          content: '深度科技发布deepin v23，全新设计，全新体验。',
          image:
            'https://storage.deepin.org/thread/202309191045559300_%E5%AE%98%E7%BD%911.png',
          image_link: 'https://www.deepin.org/zh/download',
          interval: 3000,
          links: [
            {
              title: '下载',
              url: 'https://www.deepin.org/zh/download'
            },
            {
              title: '了解更多',
              url: 'https://www.deepin.org/zh/download'
            }
          ]
        },
        {
          title: '',
          content: '',
          image:
            'https://www.deepin.org/wp-content/uploads/2023/09/banner-拷贝3.jpg',
          image_link: 'https://www.deepin.org/zh/download',
          interval: 5000,
          links: []
        },
        {
          title: '',
          content: '',
          image:
            'https://www.deepin.org/wp-content/uploads/2023/09/banner-拷贝3.jpg',
          image_link: 'https://www.deepin.org/zh/download',
          interval: 3000,
          links: []
        }
      ]
    })
  )
}

// 从浏览器本地存储获取数据
const carouselList = ref<Carousel>(
  JSON.parse(localStorage.getItem('carousel') || '{}')
)
const activeName = ref('chinese')
const elTabPaneRef = ref<HTMLElement>()

const addBannerCard = () => {
  // 添加轮播图
  carouselList.value.cards.push({
    interval: 3000,
    title: '',
    content: '',
    image: '',
    image_link: '',
    links: []
  })
}

const addTagDialogVisible = ref(false)
const addTagCardIndex = ref(-1)
const addTagForm = ref({
  title: '',
  url: ''
})

const closeTag = (cardIndex: number, tagIndex: number) => {
  carouselList.value.cards[cardIndex].links?.splice(tagIndex, 1)
}

const showAddTagDialog = (index: number) => {
  addTagForm.value = {
    title: '',
    url: ''
  }
  addTagCardIndex.value = index
  addTagDialogVisible.value = true
}

const addTag = () => {
  // 添加标签
  carouselList.value.cards[addTagCardIndex.value].links?.push({
    title: addTagForm.value.title,
    url: addTagForm.value.url
  })
  addTagDialogVisible.value = false
  addTagCardIndex.value = -1
}

const saveCarousel = () => {
  // 检查image字段是否有空的
  for (const card of carouselList.value.cards) {
    if (card.image === '') {
      ElMessage.warning('图片地址不能为空')
      return
    }
  }
  ElMessage.success('保存配置成功')
  localStorage.setItem('carousel', JSON.stringify(carouselList.value))
}

// 移除单个轮播图
const removeBanner = (index: number) => {
  ElMessageBox.confirm('确定要删除这个轮播图吗?', '警告', {
    confirmButtonText: '删除',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    carouselList.value.cards.splice(index, 1)
  })
}

// 轮播图上移
const moveUp = (index: number) => {
  const temp = carouselList.value.cards[index]
  carouselList.value.cards[index] = carouselList.value.cards[index - 1]
  carouselList.value.cards[index - 1] = temp
}

// 轮播图下移
const moveDown = (index: number) => {
  const temp = carouselList.value.cards[index]
  carouselList.value.cards[index] = carouselList.value.cards[index + 1]
  carouselList.value.cards[index + 1] = temp
}

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.label
}
</script>
