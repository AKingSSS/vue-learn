/**
 * path 依赖 node.js，需要先执行命令 npm init 生成 package.json
 * 执行 webpack 命令后，会将入口文件 main.js 打包到 dist 目录下
 *
 * 如果想要使用 npm run build,
 * 需要在 package.json 文件中 scripts 配置 "build": "webpack", 其中 “build” 名称可修改
 * 当执行 npm run build 时，优先去本地查找 webpack指令（由于不同版本会有差异，一般会安装本地webpack）
 *
 * 安装本地 webpack
 * npm install webpack@3.6.0 --save-dev
 *
 *  package.json 在执行脚本时：
 *  ① 会先在 node_modules/.bin路径中的命令
 *  ② 如果没找到，会去全局的环境变量中查找
 */
const path = require('path')

module.exports = {
    entry: "./src/main.js",
    output: {
        // path 需要绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    }

}