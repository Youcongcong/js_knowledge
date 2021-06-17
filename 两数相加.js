function _add (str1, str2) {
  let l1 = str1.length - 1
  let l2 = str2.length - 1
  let add = 0
  const resultArr = []
  while (l1 >= 0 || l2 >= 0) {
    const x = l1 >= 0 ? Number(str1[l1]) : 0
    const y = l2 >= 0 ? Number(str2[l2]) : 0
    console.log(x, y)
    const result = x + y + add
    add = Math.floor(result / 10)
    resultArr.push(result % 10)
    l1--
    l2--
  }
  return resultArr.reverse().join('')
}
//  1234
// +  42
//  1276
var res = _add('1235', '41')
console.log(res)
