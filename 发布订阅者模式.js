// // 将发布订阅者功能提取出来
// const eventFn = {
//   clientList: [],
//   listen(key, fn) {
//     if (!this.clientList[key]) {
//       this.clientList[key] = []
//     }
//     this.clientList[key].push(fn)
//   },
//   trigger() {
//     // 发布信息
//     const key = Array.prototype.shift.call(arguments)
//     const fns = this.clientList[key]
//     if (!fns || fns.length === 0) {
//       console.log(`${key}没有被订阅`)
//       return false
//     }
//     for (var i = 0, fn; (fn = fns[i++]); ) {
//       fn.apply(this, arguments)
//     }
//   },
//   // 取消订阅者
//   remove(key, fn) {
//     const fns = this.clientList[key]
//     if (!fns) return false // 如果key对应的消息没有被人订阅，则直接返回
//     if (!fn) {
//       // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
//       fns && (fns.length = 0)
//     } else {
//       for (let l = fns.length - 1; l >= 0; l--) {
//         // 反向遍历订阅的回调函数列表 var _fn = fns[ l ];
//         const _fn = fns[l]
//         if (_fn === fn) {
//           fns.splice(l, 1)
//         }
//       }
//     }
//   }
// }
// // 定义一个动态给所有对象安装发布订阅功能
// const installEvent = function (obj) {
//   for (const i in eventFn) {
//     obj[i] = eventFn[i]
//   }
// }
// const salesOffices = {}
// installEvent(salesOffices)
// // console.log('new salesOffices ----' ,salesOffices)

// // 订阅squareMeter88
// salesOffices.listen(
//   'squareMeter88',
//   (f1 = function (price) {
//     console.log(`价格= ${price}`)
//   })
// )
// salesOffices.listen('hello', (price) => {
//   console.log(`价格 = ${price}`)
// })
// // 取消订阅
// salesOffices.remove('squareMeter88', f1)
// // 发布squareMeter88
// salesOffices.trigger('squareMeter88', 2000000)
// salesOffices.trigger('hello', 4000)
// console.log(salesOffices.clientList)

// const newEvent = {
//   eventList: [],
//   addListener(key, fn) {
//     if (!this.eventList[key]) {
//       this.eventList[key] = []
//     }
//     this.eventList[key].push(fn)
//   },
//   trigger() {
//     const key = Array.prototype.shift.call(arguments)
//     const fns = this.eventList[key]
//     if (!fns || fns.length === 0) {
//       console.log(`该属性${key}未订阅`)
//       return false
//     }
//     for (let i = 0; i < fns.length; i++) {
//       fns[i].apply(this, arguments)
//     }
//   }
// }
// const obj = {}
// for (const key in newEvent) {
//   obj[key] = newEvent[key]
// }
// obj.addListener('fn1', (...arg) => {
//   console.log(arg, '测试')
// })
// obj.addListener('fn1', (...arg) => {
//   console.log(arg, '测试2')
// })
// console.log(obj)

// obj.trigger('fn1', 123, 999)
