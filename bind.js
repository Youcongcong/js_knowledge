Function.prototype.bind = function (context) {
  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }
  return Function.prototype.call(context, args)
}
console.log(1)
setTimeout(() => {
  console.log(3)
}, 0)
new Promise(resolve => {
  console.log(4)
  resolve(5)
  console.log(6)
}).then(async (data) => {
  console.log(7)
  await Promise.resolve(8)
  console.log(9)
})
console.log(2)
