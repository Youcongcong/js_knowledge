var gooleMap = {
    show:function(){
        console.log("this is gooleMap")
    }
}
var baiduMap = {
    show:function(){
        console.log("this is baiduMap")
    }
}
var renderMap = function(map){
    if(map.show instanceof Function){
        map.show();
    }
    
}
renderMap(gooleMap)


//封装数据
var myObject = (function(){
    var _name = "zhangsan";
    return {
        getName:function(){
            return _name
        }
    }
})()
console.log(myObject.getName())  //zhangsan
console.log(myObject._name)      //underfined



