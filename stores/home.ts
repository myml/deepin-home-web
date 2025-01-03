import type { HomeConfig, OpenSource, News } from '~/api/model';
import { getAPI } from "~/api";

export const useHomeStore = defineStore('Home', () => {
  const api = getAPI()
  const home = reactive<{ config?: HomeConfig; opensource?: OpenSource }>({})
  const getHome = async (lang: string) => {
    home.config = await api.getHomeConfig(lang)
    home.opensource = await api.getOpenSource()
  }
  const news = reactive<{ data: News[]; loading: boolean }>({
    data: [],
    loading: false
  })
  const getNews = async (lang: string) => {
    news.data = await api.getCommunityDynamic(lang)
  }
  return {
    home,
    getHome,
    news,
    getNews
  }
})
