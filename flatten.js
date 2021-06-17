// 数组平铺  [1,[2,3,[4,5]]]
function flatten (arr) {
  let result = []
  arr.forEach(item => {
    const isarray = item instanceof Array
    if (isarray) {
      result = result.concat(flatten(item))
    } else {
      result.push(item)
    }
  })
  return result
}

console.log(flatten([1, [2, 3, [4, 5]]]))

// [1,2,3,5,6,9,10] => [[1,2,3],[5,6],[9,10]
function arrange (source) {
  var t
  var ta
  var r = []
  source.forEach((v) => {
    if (t === v) {
      ta.push(t)
      t++
      return
    }
    ta = [v]
    t = v + 1
    r.push(ta)
  })
  return r
}
var arr = [3, 4, 13, 14, 15, 17, 20, 22]
console.log(arrange(arr))
