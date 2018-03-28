/**
 * 主要是针对触发频繁的事件
 */
 
 function debunce(fn, delay){
     let timer = null;
     return function(){
         let context = this;
         let args = arguments;

         clearTimeout(timer);
         timer = setTimeout(function(){
             fn.apply(context, args)
         },delay)
     }
 }