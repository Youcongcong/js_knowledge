// // 实现一个 flatten 函数，实现如下的转换功能
// const obj = {
//   a: 1,
//   b: [1, 2, { c: true }],
//   c: { e: 2, f: 3 },
//   g: null,
// };
// // 转换为
// let objRes = {
//   a: 1,
//   "b[0]": 1,
//   "b[1]": 2,
//   "b[2].c": true,
//   "c.e": 2,
//   "c.f": 3,
//   g: null,
// };

function plat (o, prekey, resobj) {
  prekey = prekey ? prekey + '.' : ''
  var keys = Object.keys(o)
  keys.forEach(function (item) {
    var v = o[item]
    var type = typeof v
    if (v && (type == 'object' || type == 'array')) {
      plat(v, prekey + item, resobj)
    } else {
      resobj[prekey + item] = v
    }
  })
  return resobj
}

var a = {
  a: {
    b: {
      c: 1
    }
  },
  b: [1, 2],
  c: 3
}
console.log(plat(a, '', {}))
