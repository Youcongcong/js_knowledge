
// const promise = new Promise((resole,reject) =>{
//     console.log(1)
//     resole();
//     console.log(2)
// }).then(()=>{
//     console.log(3)
// })
// console.log(4)

// 1 2 4 3  Promise结构函数是同步执行的，promise.then中的函数异步执行的

// const promise1 = new Promise((resole, reject) => {
//   resole('success1')
//   reject('error')
//   resole('success2')
// }).then((res) => {
//   console.log('then:', res)
// }).catch((err) => {
//   console.log('catch:', err)
// })

const first = () => (new Promise((resolve, reject) => {
  console.log(3)
  const p = new Promise((resolve, reject) => {
    console.log(7)
    setTimeout(() => {
      console.log(5)
      resolve(6)
    }, 0)
    resolve(1)
  })
  resolve(2)
  p.then((arg) => {
    console.log(arg)
  })
}))

first().then((arg) => {
  console.log(arg)
})
console.log(4)

// 3-7-4-1-2-5
