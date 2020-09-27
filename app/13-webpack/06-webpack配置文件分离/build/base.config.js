const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    output: {
        // path 需要绝对路径
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js",
        // 使用 htmlWebpackPlugin 省略
        // publicPath: "dist/"
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
            },
            {
                test: /\.js$/,
                // 排除非必要打包
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }

        ],
    },
    resolve: {
        extensions:['.js','.css','.vue'],
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}