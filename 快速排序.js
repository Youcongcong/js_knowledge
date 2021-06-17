var quckSort = function (arr) {
  if (arr.length <= 1) { return arr }
  var pivoIndex = Math.floor(arr.length / 2)

  var pivo = arr.splice(pivoIndex, 1)[0]
  console.log(pivo, '1111')
  var left = []
  var right = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivo) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quckSort(left).concat([pivo], quckSort(right))
}
var arr1 = [3, 44, 38, 5, 47, 15, 36]
console.log(quckSort(arr1))
// function LazyMan (name) {
//   console.log(`Hi this is ${name}`)
//   this.sleep = function (time) {
//     setTimeout(() => {
//       console.log(`wake up after ${time}`)
//     }, time * 1000)
//     return this
//   }

//   return this
// }
// LazyMan('hank').sleep(2).sleep(10)

async function async1 () {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2 () {
  console.log('async2 start')
  return new Promise((resolve, reject) => {
    resolve()
    console.log('async2 promise')
  })
}
console.log('script s')
async1()
new Promise(resolve => {
  console.log('promise1')
  resolve()
}).then(() => {
  console.log('promise2')
}).then(() => {
  console.log('promise3')
})
