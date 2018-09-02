const path = require('path');
module.exports = {
  //入口文件的配置项
  entry: {
    entry: './app/main.js'
  },
  //出口文件的配置项
  output: {
    //输出的路径，用了Node语法
    path: path.resolve(__dirname, 'dist'),
    //输出的文件名称
    filename: 'bundle.js'
  },
  mode: "development",
  //模块：例如解读CSS,图片如何转换，压缩
  module: {},
  //插件，用于生产模版和各项功能
  plugins: [],
  //配置webpack开发服务功能
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), //本地服务器所加载的页面所在的目录
    host: '192.168.118.221',
    compress: true,
    port: 8081
  } //  配置webpack服务
}