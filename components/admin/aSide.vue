<template>
  <el-aside width="200px" class="bg-[#545c64] text-white">
    <div
      class="text-center py-3 font-semibold text-lg border-b border-zinc-400">
      deepin官网后台管理
    </div>
    <el-menu
      :default-active="route.path"
      class="border-r-0"
      background-color="#545c64"
      text-color="#fff"
      router>
      <el-menu-item index="/admin/seo">
        <el-icon><icon-menu /></el-icon>
        <span>SEO</span>
      </el-menu-item>
      <el-menu-item index="/admin/carousel">
        <el-icon><icon-menu /></el-icon>
        <span>轮播图</span>
      </el-menu-item>
      <el-menu-item index="/admin/reason">
        <el-icon><icon-menu /></el-icon>
        <span>选择deepin的理由</span>
      </el-menu-item>
      <el-menu-item index="/admin/feature">
        <el-icon><icon-menu /></el-icon>
        <span>特色功能</span>
      </el-menu-item>
      <el-menu-item index="/admin/apps">
        <el-icon><icon-menu /></el-icon>
        <span>生产力工具</span>
      </el-menu-item>
      <el-menu-item index="/admin/nav">
        <el-icon><icon-menu /></el-icon>
        <span>导航栏</span>
      </el-menu-item>
      <el-menu-item index="/admin/footer">
        <el-icon><icon-menu /></el-icon>
        <span>Footer</span>
      </el-menu-item>
    </el-menu></el-aside
  >
</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
