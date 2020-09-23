/**
 * ===================使用node.js====================
 * path 依赖 node.js，需要先执行命令 npm init 生成 package.json
 * 执行 webpack 命令后，会将入口文件 main.js 打包到 dist 目录下
 *
 * ===================快捷指令打包====================
 * 如果想要使用 npm run build,
 * 需要在 package.json 文件中 scripts 配置 "build": "webpack", 其中 “build” 名称可修改
 * 当执行 npm run build 时，优先去本地查找 webpack指令（由于不同版本会有差异，一般会安装本地webpack）
 *
 *
 *  ===================安装本地 webpack====================
 * npm install webpack@3.6.0 --save-dev
 *
 *  package.json 在执行脚本时：
 *  ① 会先在 node_modules/.bin路径中的命令
 *  ② 如果没找到，会去全局的环境变量中查找
 *
 *  ===================使用css====================
 *  https://webpack.js.org/loaders/css-loader/
 *  npm install --save-dev css-loader
 *
 *
 */
const path = require('path')

module.exports = {
    entry: "./src/main.js",
    output: {
        // path 需要绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // css-loader 只负责加载
                // style-loader 只负责解析
                // 顺序不能调换
                use: ['style-loader', 'css-loader']
            },{
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // Byte limit to inline files as Data URL
                            //当加载的图片，小于limit时，会将图片编译成base64字符串形式，
                            //当加载的图片，大于limit时， 需要使用file- loader模块进行加载.
                            limit: 25000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ],
    }
}