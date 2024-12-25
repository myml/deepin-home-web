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
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              <el-alert
                title="所有更改在点击底部保存按钮后才会生效！！！"
                type="warning"
                :closable="false" />
            </div>
          </template>
          <template #extra>
            <div class="flex items-center">
              <el-dropdown>
                <el-button type="primary" class="ml-2">{{
                  adminStore.userName
                }}</el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="logout"
                      >退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
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
import { getAPI } from '~/api'

const adminStore = useAdminStore()

const logout = () => {
  getAPI()
    .logout()
    .then(res => {
      if (res.data.code === 200) {
        adminStore.isLogin = false
        localStorage.removeItem('token')
        useRouter().push('/login')
      }
    })
    .catch(err => {
      console.log(err.response.data.msg)
    })
}
</script>
