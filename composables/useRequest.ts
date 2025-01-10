import axios, { type InternalAxiosRequestConfig } from 'axios';

// 扩展 AxiosRequestConfig 类型，添加自定义字段
declare module 'axios' {
  interface AxiosRequestConfig {
    requiresAuth?: boolean; // 标记是否需要 Token
  }
}


export const useRequest = () => {
  const request = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? "https://deepin.aiice.top" : import.meta.server ? process.env.NUXT_API_BASE_URL : "/api",
    timeout: 5000,
  });

  // 请求拦截器
  request.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (config.requiresAuth) {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer=${token}`;
        }
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  // 响应拦截器
  request.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )

  return request;
};
