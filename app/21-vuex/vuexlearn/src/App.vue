<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="sub">-</button>
    <button @click="addCount(-5)">-5</button>
    <button @click="addStu">添加学生</button>
    <h2>{{ more20 }}</h2>
    <h2>{{ $store.getters.more20 }}</h2>
    <h2>{{ $store.getters.more20Len }}</h2>
    <h2>{{ $store.getters.moreAge(25) }}</h2>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {
  INCREMENT
} from "./store/mutations-types"
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是app组件",
    }
  },
  methods: {
    add() {
      // vuex的 store状态的更新唯一方式：提交mutation
      this.$store.commit(INCREMENT)
    },
    addCount(count) {
      // vuex的 store状态的更新唯一方式：提交mutation
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)
      // 2.特殊的提交封装
      this.$store.commit({
        type:'incrementCount',
        count
      })
    },
    sub() {
      this.$store.commit('decrement')
    },
    addStu() {
      let stu = {"name": "sjs", age: 29}
      this.$store.commit('addStu', stu)
    },
  },
  computed: {
    more20() {
      return this.$store.state.student.filter(s => s.age > 18)
    }
  }
}
</script>

<style>

</style>
