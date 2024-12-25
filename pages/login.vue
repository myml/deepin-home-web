<template>
  <el-form
    ref="loginFormRef"
    class="w-[520px] mt-6 login-form"
    size="large"
    :rules="loginFormRules"
    :model="loginForm">
    <el-form-item prop="username">
      <el-input
        v-model="loginForm.username"
        :prefix-icon="User"
        placeholder="用户名" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        :prefix-icon="Lock"
        placeholder="密码"
        type="password"
        show-password />
    </el-form-item>
    <el-form-item class="mt-10">
      <el-button style="width: 100%" type="primary" @click="login(loginFormRef)"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { User, Lock } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { getAPI } from '~/api'
definePageMeta({
  layout: 'login',
  middleware: 'auth'
})
defineI18nRoute(false)

const adminStore = useAdminStore()
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  username: '',
  password: ''
})

const loginFormRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(valid => {
    if (!valid) {
      return
    }
    getAPI()
      .login(loginForm.username, loginForm.password)
      .then(res => {
        if (res.data.code === 200) {
          localStorage.setItem('token', res.data.data.token)
          adminStore.isLogin = true
          adminStore.userName = res.data.data.username
          ElMessage.success('登录成功')
          useRouter().push('/admin')
        }
      })
      .catch(err => {
        ElMessage.error(err.response.data.msg)
      })
  })
}
</script>
