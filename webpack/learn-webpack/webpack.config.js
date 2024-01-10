const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css分离
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development', //开发模式
    entry: {
        main: './src/main.js' //入口文件
    },
    output: {
        path: path.resolve(__dirname,'./dist'), //输出路径
        filename: 'js/chunk-[contenthash].js',
        clean: true //清理上一次打包的文件
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', //模板文件
            filename: 'index.html', //输出文件
            inject: 'body', //脚本写在那个标签里,默认是true(在body结束后)
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/chunk-[contenthash].css',
            ignoreOrder: true // 忽略有关顺序冲突的警告
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader'] // 从右往左生效
            },
            {
                test:/\.(ong|jpe?g|svg)$/,
                type: 'asset',
                // parser: {
                //     dataUrlCondition: {
                //         maxSize:5 * 1024 *1024
                //     },
                // },
                generator: {
                    filename: 'images/[contenthash][ext][query]'
                }
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }

        ]
    }

}
