/**
 * @file  dev
 * @author renjian
 * @date 2016/8/10
 */
var webpack = require('webpack');
var webpackPublicConfig = require('../webpack.config');

webpack(webpackPublicConfig, function (err, stats) {
  if (err) {
    throw err;
  }
  process.stdout.write(stats.toString({
      colors: true,
      modules: true,
      children: false,
      chunks: true,
      chunkModules: false,
      assets: true
    }) + '\n');
});

