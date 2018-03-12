// Function.prototype.call
// Function.prototype.apply

//this指向
//1、构造器调用； 2、作为对象的方法调用；3、作为普通函数调用；4、call或apply调用

// 一、当函数作为对象的方法调用，this指向该对象
var obj = {
    a:1,
    getters:function(){
        console.log('this>>>>>>>>>>>>>>>>', this === obj)
        console.log(this === obj)
        console.log( this.a )
    }
}
obj.getters();

//二、作为普通函数调用，此时this总是指向全局对象。
window.name = 'globalname';

var getname = function(){
    return this.name
}

var myObject = {
    name:'sven',
    getName:function(){
        return this.name;
    }
}
var get = myObject.getName;
//console.log(myObject.getName())     //sven
console.log(get(),1111)                  //globalname
//console.log(getname())              //globalname

// 三、构造器调用

var Myclass = function(){
    this.name = 'zhaoshan';
}
var obj = new Myclass();
console.log('构造器-----------',obj.name)
    // 注意当构造器返回显示的返回一个object类型对象，则返回这个对象；如果是非对象则不会
    var MyclassTwo = function(){
        this.name = 'zhaoshan';
        return {
            name : 'lisi'
        }
    }
    var obj = new MyclassTwo();
    console.log('构造器显示返回-----------',obj.name)  //lisi

// 四、call，apply调用
var obj1 = {
    name : 'sven',
    getName:function(){
        return this.name
    }
}
var obj2 = {
    name : 'two'
}
console.log(obj1.getName())             // sven
console.log(obj1.getName.call(obj2))    // two

var objaa = {
    myName: 'sven',
    getName:function(){
        return this.myName
    }
}
var getname2 = objaa.getName;
console.log(getname2())  // 这时候this指向window  undefine


//模拟band的实现  传入con当作参数，作为像修正的this对象
Function.prototype.bind = function(con){
    var self = this;
    return function(){
        return self.apply(con,arguments)
    }
}
var obj23 = {
    aname :'8888'
};
var func = function(){
    console.log(this.aname,'----')
}
var f = func.bind(obj23)
f()
var func = function(a,b,c){
    console.log(this === window)
}
func.apply(null,[1,2,3])

