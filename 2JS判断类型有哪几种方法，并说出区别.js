/**
 * 1、typeof
 * 2、instanceof
 * 3、constructor
 */

// instanceof 主要的实现原理就是只要右边的prototype，在左边变量的原型链上即可
function _instanceof (left, right) {
  var O = right.prototype
  var left = left.__proto__
  while (true) {
    if (O == left) {
      return true
    }
    left = left.__proto__
  }
}
