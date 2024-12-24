import request from '@/utils/request'
import type { HomeConfig, News, OpenSource } from './model'

export class API {
  private getConfig<T>(key: string): Promise<T> {
    return request
      .get<ConfigResponse>('/api/v1/public/config/' + key).then(resp => {
        return JSON.parse(resp.data.data.content) as T
      })
  }

  getHomeConfig(lang: string) {
    return this.getConfig<HomeConfig>('home_' + lang)
  }
  async setHomeConfig(lang: string, config: HomeConfig) {
    await request.post('/api/v1/public/config/home_' + lang, JSON.stringify(config), {
      headers: {
        Authorization: `Bearer=${localStorage.getItem('token')}`
      }
    })
  }

  getOpenSource() {
    return request.request<OpenSource>({ url: 'https://www.deepin.org/api/datastat/summary', method: "GET" }).then(resp => resp.data)
  }
  getCommunityDynamic(lang: string, limit: number = 3) {
    return request.request<News[]>({ url: `https://www.deepin.org/${lang}/wp-json/wp/v2/posts`, method: "GET" }).then(resp => resp.data.slice(0, limit))
  }
}

interface ConfigResponse {
  code: number;
  msg: string;
  data: Data;
}

interface Data {
  name: string;
  content: string;
}
