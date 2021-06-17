// 使用
// 根据接口返回的Id来进一步处理

// function getUseId() {
//   return new Promise((resolve, reject)=> {
//     //
//     http.get(url,(result)=>{
//       resolve(result)
//     })
//   });
// }
// //
// getUseId().then((id)=>{
//   //取到
//   console.log(id)
// })
// -----------------------------------------------------------------
// 实现Promise

function PromiseAgain(fn) {
  var value = null,
      callbacks = [];
  this.then = (onFul) => {
    callbacks.push(onFul)
    console.log(onFul)
    return this
  }
  function resolve(value){
    setTimeout(()=>{
      callbacks.forEach((callback)=>{
        callback(value)
      })
    },0)
  }
  fn(resolve)

}
// settimeout 与 promise区别
new PromiseAgain(1).then('1').then(2)
