import axios from 'axios'

export function request(config, success, failure) {
  //1.创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  return instance(config)
}
