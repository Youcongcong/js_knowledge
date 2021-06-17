// 浅拷贝
function simpleClone (initObj) {
  const obj = {}
  for (const i in initObj) {
    obj[i] = initObj[i]
  }
  return obj
}
// 深拷贝
function deepClone (initObj) {
  const obj = {}
  for (const i in initObj) {
    const prop = initObj[i]
    if (typeof prop === 'object') {
      obj[i] = deepClone(initObj[i])
    } else {
      obj[i] = prop
    }
  }
  return obj
}
const a = {
  a: {
    B: 123
  },
  c: 2
}
const deepa = deepClone(a)
a.c = 3
console.log(deepa.c)
