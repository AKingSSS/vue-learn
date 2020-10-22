import Vue from 'vue'
import Vuex from 'vuex'

import {
  INCREMENT
} from "./mutations-types";

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 3,
    student: [
      {"name": "yk", age: 10},
      {"name": "wj", age: 25},
      {"name": "lm", age: 26},
    ]
  },
  mutations: {
    // 同步方法
    [INCREMENT](state) {
      state.counter++;
    },
/*    incrementCount(state, count) {
      // 特殊方式封装传参，打印的是一个对象
      console.log(count);
      state.counter += count;
    },*/
    incrementCount(state, payload) {
      // 特殊方式封装传参，打印的是一个对象
      console.log(payload);
      state.counter += payload.count;
    },
    decrement(state) {
      state.counter--;
    },
    addStu(state,stu) {
      state.student.push(stu);
    },

  },
  actions: {

  },
  getters: {
    // 处理 state 变异后的数据
    powerCouter(state) {
      return state.counter * state.counter
    },
    more20(state) {
      return state.student.filter(s => s.age >= 18)
    },
    more20Len(state, getters) {
      return getters.more20.length
    },
    moreAge(state) {
      return function (age) {
        return state.student.filter(s => s.age > age)
      }
    }
  },
  modules: {

  }
})

// 3.导出store独享
export default store
