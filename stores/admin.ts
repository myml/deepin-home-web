import { getAPI } from "~/api"
import type { HomeConfig, OpenSource, } from "~/api/model"

export const useAdminStore = defineStore('Admin', () => {
  const api = getAPI()
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
  return {
    admin,
    getAdmin,
    setHomeConfig,
    isConfigUpdated
  }

})
