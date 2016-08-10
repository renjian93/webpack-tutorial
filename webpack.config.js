/**
 * @file webpack config
 * @author renjian
 * @date 2016/8/10
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var projectRoot = path.resolve(__dirname);
module.exports = {
  entry: {
    demo1: './src/demo1/entry',
    demo2: './src/demo2/entry2'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '../',
    filename: '[name]/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 1,
          name: 'img/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'demo1/index.html',
      template: 'index.html',
      chunks: ['demo1'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'demo2/index.html',
      template: 'index.html',
      chunks: ['demo2'],
      inject: true
    })
  ]

};
