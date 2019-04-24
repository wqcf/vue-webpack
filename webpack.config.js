const path = require('path');
//启用热更新的第二步
const webpack = require('webpack')

var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

//这个配置文件，起始文件就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = (env, argv)=> {
    const devMode = argv.mode !== 'production';
    return {
        //大家已经学会了举一反三，大家觉得，在配置文件中，需要手动指定入口和出口
        entry:path.join(__dirname, './src/main.js'),
        output:{
            path: path.join(__dirname,'./dist'),
            filename:'bundle.js',//这是指定，输出文件的名称
        },
        // devServer:{//配置dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
        //     open: true,//自动打开浏览器
        //     prot: 3000,
        //     // contentBase: './src',//指定根目录
        //     hot: true //启用热更新
        // },
        plugins:[//配置插件的节点
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new htmlWebpackPlugin({
                template:path.resolve(__dirname,'src/index.html'),
                filtename:'index.html'
            }),
            new VueLoaderPlugin()
        ],
        module: {//这个节点，用于配置 所有第三方模块 加载器
            rules:[// 所有第三方模块的 匹配规则
                {
                    test: /\.css$/, use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
                },{
                    test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']//配置处理.less文件的第三方文件
                },{
                    test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
                },{
                    test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7632&name=[hash:8]-[name].[ext]'
                    //limit 给定的值, 是图片的大小， 单位是 byte ，如果我们引用的 图片，大于或等于给你的limit值，
                },{
                    test: /\.(ttf|eot|svg|woff|woff2|)$/, use: 'url-loader',//处理 字体文件
                },{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },{
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
            ]
        },
        resolve: {
            alias: {
                "vue$": "vue/dist/vue.js"
            }
        }
    }

}