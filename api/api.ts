import request from '@/utils/request'
import type { HomeConfig, News, OpenSource } from './model'
import jsSha256 from 'js-sha256'

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
    await request.post('/api/v1/public/config/home_' + lang, config, {
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
  isLogin() {
    return request.get<IsLoginResponse>('/api/v1/public/is_login', {
      headers: {
        Authorization: `Bearer=${localStorage.getItem('token')}`
      }
    })
  }

  // 退出登录
  logout() {
    return request.get<LogoutResponse>('/api/v1/public/logout', {
      headers: {
        Authorization: `Bearer=${localStorage.getItem('token')}`
      }
    })
  }

  // 登录
  login(username: string, password: string) {
    return request.post<LoginResponse>('/api/v1/public/login', { username, password: jsSha256.sha256(password) })
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

interface IsLoginResponse {
  code: number;
  msg: string;
  data: {
    username: string;
  };
}

interface LogoutResponse {
  code: number;
  msg: string;
  data: null;
}

interface LoginResponse {
  code: number;
  msg: string;
  data: {
    token: string;
    username: string;
  };
}
