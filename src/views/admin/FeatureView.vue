<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="中文" name="chinese">
      <el-form label-width="100">
        <el-form-item label="标题">
          <el-input v-model="feature.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="feature.content"
            type="textarea"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-card
          v-for="(card, index) in feature.cards"
          :key="index"
          class="mt-3"
        >
          <el-form label-width="100">
            <el-form-item label="标题">
              <el-input
                v-model="card.title"
                placeholder="请输入标题"
              ></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input
                v-model="card.content"
                type="textarea"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item label="图片">
              <el-input
                v-model="card.image"
                placeholder="请输入图片"
              ></el-input>
            </el-form-item>
            <el-form-item label="封面">
              <el-input
                v-model="card.cover"
                placeholder="请输入封面"
              ></el-input>
            </el-form-item>
            <el-form-item label="链接">
              <el-input v-model="card.url" placeholder="请输入链接"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
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
    </el-tab-pane>
    <el-tab-pane label="英文" name="english">
      <el-form label-width="100">
        <el-form-item label="标题">
          <el-input v-model="feature.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input
            v-model="feature.content"
            type="textarea"
            placeholder="请输入内容"
          ></el-input>
        </el-form-item>
        <el-card
          v-for="(card, index) in feature.cards"
          :key="index"
          class="mt-3"
        >
          <el-form label-width="100">
            <el-form-item label="标题">
              <el-input
                v-model="card.title"
                placeholder="请输入标题"
              ></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input
                v-model="card.content"
                type="textarea"
                placeholder="请输入内容"
              ></el-input>
            </el-form-item>
            <el-form-item label="图片">
              <el-input
                v-model="card.image"
                placeholder="请输入图片"
              ></el-input>
            </el-form-item>
            <el-form-item label="封面">
              <el-input
                v-model="card.cover"
                placeholder="请输入封面"
              ></el-input>
            </el-form-item>
            <el-form-item label="链接">
              <el-input v-model="card.url" placeholder="请输入链接"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
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
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Feature } from '@/api/model'
import { ElMessage, type TabsPaneContext } from 'element-plus'

if (!localStorage.getItem('feature')) {
  localStorage.setItem(
    'feature',
    JSON.stringify({
      title: '特色功能实用更高效',
      content:
        'deepin根据用户使用习惯自研开发40余款应用，为用户提供了更高效、便捷的办公能力！',
      cards: [
        {
          title: '自由定义办公方式',
          content:
            '独一无二的桌面环境，多样化的办公方式，deepin为您带去新颖独特的使用感受，满足您个性化的使用需求！',
          image: 'https://www.deepin.org/index/assets/imgs/自定义办公.png',
          cover: 'https://www.deepin.org/index/assets/imgs/bilibili/p1.jpg',
          url: 'https://www.bilibili.com/video/BV1Sz4y1m7Ks'
        },
        {
          title: '全局搜索',
          content:
            '遗忘在角落的照片、视频、文件，贴心功能想您所想，搜您所需，一键直达。',
          image: 'https://www.deepin.org/index/assets/imgs/全局搜索.png',
          cover: 'https://www.deepin.org/index/assets/imgs/bilibili/p2.jpg',
          url: 'https://www.bilibili.com/video/BV1Tf4y177NX'
        },
        {
          title: '截图录屏',
          content:
            '有价值的图文资料，急待分享的趣味画面，截图录屏助您无任何负担的随时捕捉。',
          image: 'https://www.deepin.org/index/assets/imgs/截图录屏.png',
          cover: 'https://www.deepin.org/index/assets/imgs/bilibili/p3.jpg',
          url: 'https://www.bilibili.com/video/BV1pi4y1A7AQ'
        },
        {
          title: 'OCR',
          content:
            '想要复制图片上的中英文？一键精准识别，一秒高效提取，提升效率竟然如此简单。',
          image: 'https://www.deepin.org/index/assets/imgs/ocr.png',
          cover: 'https://www.deepin.org/index/assets/imgs/bilibili/p4.jpg',
          url: 'https://www.bilibili.com/video/BV1Rh411i79d'
        }
      ]
    })
  )
}

const activeName = ref('chinese')

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.label
}
const feature = ref<Feature>(
  JSON.parse(localStorage.getItem('feature') || '{}')
)

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
  localStorage.setItem('feature', JSON.stringify(feature))
  ElMessage.success('保存成功')
}
</script>
