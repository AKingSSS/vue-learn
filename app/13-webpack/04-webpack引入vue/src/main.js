const {add, mul} = require('./js/mathUtils.js')

console.log(add(10, 20));
console.log(mul(10, 20));
console.log(mul(height, width));


import {height, width} from "./js/info.js";

// 依赖 css 文件
require("./css/normal.css")
// 依赖 less 文件
require("./css/special.less")
document.writeln("<h>hello,Python大星</h>")

// 使用 vue 进行开发
import Vue from 'vue'

const  app = new Vue({
    el:'#app',
    data:{
        message:'Python大星'
    }

})