import request from '@/utils/request'
import type { HomeConfig, News, OpenSource } from './model'

export class API {
  async getHomeConfig(lang: string) {
    return request
      .get<HomeConfig>('/api/v1/public/config/home_' + lang)
      .then(resp => resp.data)
  }
  async setHomeConfig(lang: string, config: HomeConfig) {
    await request.post('/api/v1/public/config/home_' + lang, config)
  }

  async getOpenSource() {
    return request
      .get<OpenSource>('/api/v1/public/opensource')
      .then(resp => resp.data)
  }
  async getCommunityDynamic(lang: string) {
    return request
      .get<News[]>(`https://www.deepin.org/${lang}/wp-json/wp/v2/posts`)
      .then(resp => resp.data)
  }
}
