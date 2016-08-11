/**
 * @file entry
 * @author renjian
 * @date 2016/8/10
 */
require('./style.css');
setTimeout(function () {
  require.ensure(["./module1"], function (require) {
    document.querySelector('#info').innerHTML = require('./module1.js');
  })
}, 2000);

