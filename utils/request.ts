import { Axios } from 'axios'

const request = new Axios({
  baseURL: import.meta.server ? process.env.NUXT_API_BASE_URL : "/api",
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    response.data = JSON.parse(response.data)
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
