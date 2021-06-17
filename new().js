Object.create = Object.create || function (obj) {
  var F = function () {}
  F.prototype = obj
  return new F()
}
function New1 (func) {
  const o = Object.create(func.prototype)
  const k = func.call(o)
  // 如果返回的是引用类型，则返回实例对象o
  return typeof K === 'Object' ? k : o
}

var F = function () {}
var f = New1(F)

console.log(F.prototype === f.__proto__)
