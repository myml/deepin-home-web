import { Axios } from 'axios'

const request = new Axios({
  baseURL: '/',
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
    // TODO axios和mock结合会出现没有自动解析json的问题，需要排查排查
    response.data = JSON.parse(response.data)
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
