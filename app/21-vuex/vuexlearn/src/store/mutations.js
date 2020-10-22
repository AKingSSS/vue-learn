import {INCREMENT} from "./mutations-types";

export default {
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
  }
}
