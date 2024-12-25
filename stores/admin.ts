import { getAPI } from "~/api"
import type { HomeConfig, OpenSource, } from "~/api/model"

export const useAdminStore = defineStore('Admin', () => {
  const api = getAPI()
  const isLogin = ref(false)
  const userName = ref('')
  const admin = reactive<{ homeConfig?: HomeConfig, opensource?: OpenSource }>({})
  // 配置是否有更改
  const isConfigUpdated = ref(true)
  const getAdmin = async (lang: string) => {
    admin.homeConfig = await api.getHomeConfig(lang)
    isConfigUpdated.value = false
  }

  const setHomeConfig = async  <T extends keyof HomeConfig>(lang: string, key: T, value: HomeConfig[T]) => {
    if (!admin.homeConfig) return;
    admin.homeConfig[key] = value
    await api.setHomeConfig(lang, admin.homeConfig)
    isConfigUpdated.value = true
  }

  const isAuthenticated = async () => {
    try {
      const res = await api.isLogin()
      if (res.data.code === 200) {
        isLogin.value = true
        userName.value = res.data.data.username
        return true
      }
      return false
    } catch (err) {
      console.error(err)
      return false
    }
  }
  const logout = async () => {
    try {
      const res = await api.logout()
      if (res.data.code === 200) {
        isLogin.value = false
        localStorage.removeItem('token')
        return true
      }
      return false
    } catch (err) {
      console.error(err)
      return false
    }
  }
  return {
    admin,
    getAdmin,
    setHomeConfig,
    isConfigUpdated,
    isLogin,
    userName,
    isAuthenticated,
    logout
  }

})
