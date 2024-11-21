export interface HomeConfig {
  imageList: string[]
  reasonList: { title: string; content: string }[]
  office: Office
  apps: Apps
}

export interface News {
  image: string
  title: string
  content: string
  time: string
}

export interface OpenSource {
  pull_request: number
  commits: number
  contributors: number
  repositories: number
  issues: number
  teams: number
}

export interface Office {
  title: string
  content: string
  cards: {
    image: string
    title: string
    content: string
    url: string
    cover: string
  }[]
}

export interface Apps {
  title: string
  content: string
  cards: {
    list: { title: string; image: string; disabled?: boolean; link?: string }[]
    title: string
    content: string
  }[]
}
