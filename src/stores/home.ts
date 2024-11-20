import request from '@/utils/request'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useLangStore = defineStore('Home', () => {
  const home = reactive<{ config?: HomeConfig; opensource?: OpenSource }>({})
  const getHome = async (lang: string) => {
    const config = await request.get<HomeConfig>(
      '/api/v1/public/config/home_' + lang
    )
    const opensource = await request.get<OpenSource>(
      '/api/v1/public/opensource'
    )
    console.log({ config, opensource })
    home.config = config.data
    home.opensource = opensource.data
  }
  const news = reactive<News[]>([])
  const loadNews = () => {
    news.push(...newsData)
  }
  return {
    home,
    getHome,
    news,
    loadNews
  }
})

interface HomeConfig {
  imageList: string[]
  reasonList: { title: string; content: string }[]
  openSource: {
    pull_request: number
    commits: number
    contributors: number
    repositories: number
    issues: number
    teams: number
  }
}

interface News {
  image: string
  title: string
  content: string
  time: string
}

interface OpenSource {
  pull_request: number
  commits: number
  contributors: number
  repositories: number
  issues: number
  teams: number
}

const newsData: News[] = [
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  },
  {
    image:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    title: 'deepin 社区惊艳亮相2024 OSCAR开源产业大会，社区王耀华获奖',
    content:
      '10月16日，由中国通信标准化协会主办，中国信息通信研究院承办的的“2024 OSCAR开源产业大会”在北京隆重开幕。本次大会旨在搭建专业平台，广纳产研智慧，扎实开源体系构建，繁荣开源生态建设，推动开源产业发展。',
    time: '2024-10-16 12:12:12'
  }
]
