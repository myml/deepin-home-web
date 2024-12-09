<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane ref="elTabPaneRef" label="中文" name="chinese">
      <admin-carouselCard
        v-model:cards="carouselList.cards"
        @save="saveCarousel"
      />
    </el-tab-pane>
    <el-tab-pane label="英文" name="english">
      <admin-carouselCard
        v-model:cards="carouselList.cards"
        @save="saveCarousel"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { Carousel } from '@/api/model';
import { ref } from 'vue';
import { ElMessage, type TabsPaneContext } from 'element-plus';

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
          online_time: '2023-09-19',
          downline_time: '2023-09-19',
          links: [
            {
              title: '下载',
              url: 'https://www.deepin.org/zh/download',
            },
            {
              title: '了解更多',
              url: 'https://www.deepin.org/zh/download',
            },
          ],
        },
        {
          title: '',
          content: '',
          image:
            'https://www.deepin.org/wp-content/uploads/2023/09/banner-拷贝3.jpg',
          image_link: 'https://www.deepin.org/zh/download',
          interval: 5000,
          online_time: '2023-09-19',
          downline_time: '2023-09-19',
          links: [],
        },
        {
          title: '',
          content: '',
          image:
            'https://www.deepin.org/wp-content/uploads/2023/09/banner-拷贝3.jpg',
          image_link: 'https://www.deepin.org/zh/download',
          interval: 3000,
          online_time: '2024-12-19 18:00:00',
          downline_time: '2024-1-19 18:00:00',
          links: [],
        },
      ],
    })
  );
}

// 从浏览器本地存储获取数据
const carouselList = ref<Carousel>(
  JSON.parse(localStorage.getItem('carousel') || '{}')
);
const activeName = ref('chinese');
const elTabPaneRef = ref<HTMLElement>();

const saveCarousel = () => {
  ElMessage.success('保存配置成功');
  localStorage.setItem('carousel', JSON.stringify(carouselList.value));
};

const handleClick = (tab: TabsPaneContext) => {
  activeName.value = tab.props.label;
};
</script>
