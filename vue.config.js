const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
      open: true,
      proxy: {
          '/api': {
              target: 'http://10.100.153.171:82',
              changeOrigin: true
          }
      }
  },
  pages: {
      index: {
          entry: 'src/main.js',
          template: 'public/index.html',
          filename: 'index.html',
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: '财富管理数据大屏',
          chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
  },
  configureWebpack: {
    plugins: [
      new HtmlWebpackInlinePlugin({
        compress: false
      })
    ]
  },
}
