/**
 * 与防抖动最大区别就是
 * 节流函数不管事件触发多频繁，都会在规定的时间内执行处理函数
 */

// 实现方式：1、时间戳 2、定时器

var throttle = function (func, delay) {
  var prev = Date.now()
  return function () {
    var context = this
    console.log(this, 'this----')
    var args = arguments
    var now = Date.now()
    if (now - prev >= delay) {
      func.call(context, args)
      prev = Date.now()
    }
  }
}
var example = function () {
  console.log(1)
}
throttle(example(), 10000)
