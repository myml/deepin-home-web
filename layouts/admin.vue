<template>
  <el-container class="h-screen">
    <admin-aSide />
    <el-container>
      <el-header class="border">
        <el-page-header icon="" class="mt-3" title=" ">
          <template #content>
            <div class="flex items-center">
              <el-avatar
                :size="32"
                class="mr-3"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <span class="text-large font-600 mr-3 text-nowrap"
                >{{ route.name }}
              </span>

              <el-alert
                title="所有更改在点击底部保存按钮后才会生效！！！"
                type="warning"
                :closable="false"
              />
            </div>
          </template>
          <template #extra>
            <div class="flex items-center">
              <el-button type="primary" class="ml-2">username</el-button>
            </div>
          </template>
        </el-page-header>
      </el-header>
      <el-main class="h-full">
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
