import type { API } from './api'
import { mockAPI } from './mock'

export const getAPI = (): API => {
  // TODO等后端做好后替换成API
  return new mockAPI()
}
