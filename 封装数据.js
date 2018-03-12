//模拟pubilc private
//除了ES6 中let 之外，一般通过函数创建作用域

var myObject = (function(){
    var _name = 'sven';
    return {
        getName:function(){
            return _name;
        }
    }
})()
console.log(myObject._name);
console.log(myObject.getName())
