import type { HomeConfig, OpenSource, News } from './../api/model';
import { getAPI } from "~/api";

export const useHomeStore = defineStore('Home', () => {
  const api = getAPI()
  const home = reactive<{ config?: HomeConfig; opensource?: OpenSource }>({})
  const getHome = async (lang: string) => {
    home.config = await api.getHomeConfig(lang)
    home.opensource = await api.getOpenSource()
    return true
  }
  const news = reactive<{ data: News[]; loading: boolean }>({
    data: [],
    loading: false
  })
  let newsPage = 0
  const loadNews = async () => {
    newsPage++
    news.loading = true
    const data = await api.loadNews(newsPage)
    news.data.push(...data)
    news.loading = false
  }
  return {
    home,
    getHome,
    news,
    loadNews
  }
})
