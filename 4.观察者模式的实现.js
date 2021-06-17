// ES5的实现方式

function observe (oldVal, newVal) {

}
Object.defineProperty(targetObj, 'name', {
  enumerable: true,
  configurable: true,
  get: function () {
    return name
  },
  set: function (val) {
    observe(name, val)
    name = val
  }
})

// ES6实现 set
class TarObj {
  constructor (age, name) {
    this.age = age
    this.name = name
  }

  set name (val) {
    observe(name, val)
    name = val
  }
}
const obj = new TarObj(2, 'xiaoming')
obj.name = 'xiaohong'

// ES6实现 Reflect Proxy

const proxyObj = new Proxy(targetObj, {
  set (target, property, value, reciver) {
    if (property === 'name') {
      observe(target[property], value)
    }
    Reflect.set(target, property, value, reciver)
  }
})
proxyObj.name = 'Lucas'
