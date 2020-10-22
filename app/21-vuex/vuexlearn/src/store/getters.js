export default {
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
}
