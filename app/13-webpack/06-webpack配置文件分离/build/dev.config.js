const path = require('path')
const webpackMerge = require("webpack-merge")
const baseconfig = require("./base.config")

module.exports = webpackMerge(baseconfig, {
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        // 实时监听: 使用 webpack-dev-server 启动
        inline: true
    }
})