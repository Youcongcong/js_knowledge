var Plane = function(){
    this.blood = 100;
    this.attackLevel = 1;
    this.defenseLevel = 1
}
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

//在不支持Object.create方法的浏览器中，可通过下面方法实现
Object.create = Object.create || function(obj){
    var F = function(){}
    F.prototype = obj;
    return new F();
}
var clonePlane = Object.create(plane)
console.log('start---------plane')
console.log(clonePlane)
console.log('end---------plane')


//<!-------------------------------------------->
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){
    return this.name
}
var a = new Person('you')
console.log('start---------Person')
console.log(a.name)
console.log(a.getName())
console.log('end---------Person')

class Animal{
    constructor(name){
        this.name = name;
    };
    getName(){
        return this.name;
    }

}
class Dog extends Animal{
    constructor(name){
        super(name)
    };
    speak(){
        return '小可爱'
    }
}
var dog = new Dog('金毛');

console.log('Animal>>>>>>>>>>>>>>>>>>>')
console.log(dog.getName() + 'says' + dog.speak())