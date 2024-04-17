const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    // 输出文件名
    // filename: '[name].js',
    // 输出文件路径
    //  当前文件的根目录
    path: __dirname + '/dist',
    clean: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'vue-study'
    })
  ],
  mode: 'development'
}
