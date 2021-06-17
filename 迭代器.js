/* 实现jq each函数
* each接受两个参数 1.循环数组 2.触发回调
*/
const each = function (ary, callback) {
  for (let i = 0, l = ary.length; i < l; i++) {
    // 把下标和元素当作参数传给 callback 函数
    callback.call(ary[i], i, ary[i])
  }
}
each([1, 2, 3], (i, n) => {
  console.log(n)
})

// 内部迭代器
const compare = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error('arr1和arr2不相等')
  }
  each(arr1, (i, n) => {
    if (n !== arr2[i]) {
      throw new Error('arr1和arr2不相等')
    }
  })
}
compare([1, 2, 3], [1, 4, 3])
