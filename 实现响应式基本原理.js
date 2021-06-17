
class Dep {
  constructor () {
    // 用来存放Watcher对象数组
    this.subs = []
  };

  /* 在subs中添加一个Watcher对象 */
  addSub (sub) {
    this.subs.push(sub)
    console.log(this.subs)
  };

  /* 通知Watcher对象更新视图 */
  notify () {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}
class Watcher {
  constructor () {
    // 在new Watcher对象时将该对象赋值Dep.target
    Dep.target = this
  };

  // 更新视图的方法
  update () {
    console.log('升级版视图更新啦～')
  }
}
Dep.target = null

// 定义一个cb函数，用来模拟视图更新，调用它即代表更新视图，内部可以是更新视图的方法

function cb (val) {
  /* 渲染视图 */
  console.log('视图更新啦～')
}

/*
 * 然后定义一个defineReactive，这个方法通过Object.defineProperty来实现对对象的响应式化。
 * obj的key属性在读的时候会触发reactiveGetter方法，而该属性被写的时候则会触发reactiveSetter方法
 */
function defineReactive (obj, key, val) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      // 将当前的Watcher对象存入到dep的subs中
      dep.addSub(Dep.target)

      return val // 实际上是会收集依赖
    },
    set: function reactiveSetter (newVal) {
      if (newVal === val) return
      dep.notify()
      // cb(newVal);
    }
  })
}
/**
 * 实现了上面的方法，我们还需要封装一层observer，传入一个value（需要响应式变化的对象）
 */
function observer (value) {
  if ((typeof value !== 'object') || !value) {
    return
  }
  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key])
  })
}

class Vue {
  constructor (options) {
    this._data = options.data
    observer(this._data)
    //
    new Watcher()

    // 用读取来触发get 进行依赖收集
    console.log('render', this._data.text1)
  }
}
const globaObj = {
  text1: '1'
}
const o = new Vue({
  data: globaObj
})
const o2 = new Vue({
  data: globaObj
})

// globaObj.text1 = '233'  //试图更新啦
