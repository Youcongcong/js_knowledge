// add(1,2,3)(10) -> 16
function add () {
  var args = Array.from(arguments)
  var fn = function () {
    var newArgs = args.concat(Array.from(arguments))
    return add.apply(null, newArgs)
  }
  fn.toString = function () {
    return args.reduce(function (a, b) {
      return a + b
    })
  }
  return fn
}

var a = add(1, 2, 3)(10, 10, 10)
console.log(a.toString())
