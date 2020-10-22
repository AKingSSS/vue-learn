import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import getters from "./getters";
import moduleA from "./modules/moduleA";

import {
  INCREMENT
} from "./mutations-types";

// 1.安装插件
Vue.use(Vuex)

const state = {
  counter: 3,
  student: [
    {"name": "yk", age: 10},
    {"name": "wj", age: 25},
    {"name": "lm", age: 26},
  ]
}


// 2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions: {},
  getters,
  modules: {
    moduleA
  }
})

// 3.导出store独享
export default store
