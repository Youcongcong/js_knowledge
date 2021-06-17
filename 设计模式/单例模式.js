/**
 * 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点
 *
 */

var Singleton = function (name) {
  this.name = name
  this.instance = null // 用来标志
}
Singleton.prototype.getName = function () {
  console.log(this.name)
}
Singleton.getInstace = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance
}

var a = Singleton.getInstace('name1')
var b = Singleton.getInstace('name2')

console.log(a, b)
