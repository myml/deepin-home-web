import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.server ? process.env.NUXT_API_BASE_URL : "/api",
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  request => {
    return request
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

export default request
