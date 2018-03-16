/**
 * 创建自定义对象通常两种方法
 * 1、new Object 实例，然后再为其添加属性和方法
 * 2、对象字面量方法
 */
var person = new Object();
person.name = "nice";
person.age = "24";
person.sayName = function () {
    console.log('my name is:' + this.name)
}
person.sayName();

var person1 = {
    name:'nice',
    age:'24',
    sayName(){
        console.log('my name is:' + this.name)
    }
}
person1.sayName()

/**
 * 属性类型
 * javascript定义了两种不同的属性：
 *  1、数据属性    ---> 一般用于存储数据数值
 *  2、访问器属性  ---> 一般进行get/set操作，不能直接存储数据数值
 *  
 */