// 实现create
Object.create = Object.create || function (shili) {
  var F = function () {}
  F.prototype = shili;
  return new F()
}