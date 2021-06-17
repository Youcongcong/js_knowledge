function multiplication (str1, str2) {
  const l1 = str1.length
  const l2 = str2.length
  const p = new Array(l1 + l2).fill(0)
  console.log(p)
  for (var i = l1; i--;) {
    for (var j = l2; j--;) {
      const nums = str1[i] * str2[j] + p[i + j + 1]
      p[i + j + 1] = nums % 10
      p[i + j] = p[i + j] + (nums / 10) | 0
    }
  }
  while (p[0] == 0) {
    p.shift()
  }
  console.log(p)
  return p.join('')
}
console.log(multiplication('100', '123'))
