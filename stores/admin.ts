import { getAPI } from "~/api"
import type { HomeConfig, OpenSource, } from "~/api/model"

export const useAdminStore = defineStore('Admin', () => {
  const api = getAPI()
  const admin = reactive<{ homeConfig?: HomeConfig, opensource?: OpenSource }>({})
  const getAdmin = async (lang: string) => {
    admin.homeConfig = await api.getHomeConfig(lang)
    admin.opensource = await api.getOpenSource()
  }

  const setHomeConfig = async  <T extends keyof HomeConfig>(lang: string, key: T, value: HomeConfig[T]) => {
    if (!admin.homeConfig) return;
    // 如果配置有更改，更新配置
    if (admin.homeConfig[key] !== value) {
      admin.homeConfig[key] = value
      await api.setHomeConfig(lang, admin.homeConfig)
    } else {
      console.log('配置无更改，不需要更新')
    }
  }
  return {
    admin,
    getAdmin,
    setHomeConfig
  }

})
