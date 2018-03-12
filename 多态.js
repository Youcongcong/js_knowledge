//多态
var makeSound = function(animal){
    animal.sound();
}
var Duck = function(){}

Duck.prototype.sound = function(){
    console.log('嘎嘎嘎嘎-----');
}
var Chicken = function(){}

Chicken.prototype.sound = function(){
    console.log('咯咯咯------')
}

makeSound(new Duck())
makeSound(new Chicken())

//多态的思想实际是把‘做什么’和‘谁去做’分离开来，要实现这一点，归根结底先要消除类型之间的耦合关系。