/**
 * @file webpack config
 * @author renjian
 * @date 2016/8/10
 */
var path = require('path');
console.log(__dirname);
module.exports = {
  entry: './src/demo1/entry.js',
  output: {
    path: path.resolve(__dirname, './src/demo1'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
