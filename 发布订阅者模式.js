

 //将发布订阅者功能提取出来
 var event = {
     clientList:[],
     listen:function(key,fn){
        if(!this.clientList[key]){
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
     },
     trigger:function(){ //发布信息
        console.log(arguments,'arguments-------')
        var key = Array.prototype.shift.call( arguments );
        console.log(key,'key------')
        console.log(arguments,'arguments-------')
        var fns = this.clientList[ key ];
        if(!fns || fns.length === 0){
            console.log(`${key}没有被订阅`)
            return false
        }
        for(var i = 0,fn; fn = fns[i++];){
            fn.apply(this,arguments)
        }
     },
     //取消订阅者
     remove:function(key,fn){
        var fns = this.clientList[ key ];
        if(!fns) return false;  //如果key对应的消息没有被人订阅，则直接返回
        if ( !fn ){ // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
            fns && ( fns.length = 0 ); 
        }else{
            for ( var l = fns.length - 1; l >=0; l-- ){ // 反向遍历订阅的回调函数列表 var _fn = fns[ l ];
                var _fn = fns[ l ];
                console.log(_fn,'_fn------')
                if( _fn === fn ){
                    fns.splice( l, 1 );
                }
            }
        }
     }
 }
 //定义一个动态给所有对象安装发布订阅功能
 var installEvent = function(obj){
    for(var i in event){
        obj[i] = event[i];
    }
 }
 var salesOffices = {}
 installEvent(salesOffices)
 //console.log('new salesOffices ----' ,salesOffices)

 //订阅squareMeter88
 salesOffices.listen( 'squareMeter88', f1 = function( price ){
      console.log( '价格= ' + price );
 });
 salesOffices.listen('hello',function(price){
     console.log('价格 = ' + price)
 })
 //取消订阅
 salesOffices.remove('squareMeter88',f1)
 //发布squareMeter88
 salesOffices.trigger( 'squareMeter88', 2000000 )
 salesOffices.trigger('hello',4000)
