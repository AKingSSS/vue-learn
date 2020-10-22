import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 1.单个网络请求
// axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }).then(res => {
//   console.log(res);
// })
// 2.并发请求
// 全局配置
/*
axios.defaults.baseURL="http://123.207.32.32:8000"
// 单位 ms
axios.defaults.timeout=5000

axios.all([axios({
    url: "/home/multidata"
  }
), axios({
    url: "/home/data",
    params: {
      type: "sell",
      page: 4
    }
  }
)]).then(axios.spread((res1,res2) =>{
  console.log(res1);
  console.log(res2);
}))
*/

import {request} from "./network/request";

request({
    url: "/home/multidata",
  }, res => {
    console.log(res);
  }, err => {
    console.log(err);
  }
)
