// 为什么要依赖收集？
/**
 * 举个例子我们现在有这么一个Vue对象：
 * new Vue ({
 *      template:
 *          `<div>
 *              <span>{{text1}}</span>
 *              <span>{{text2}}</span>
 *           </div>`,
 *      data:{
 *          return{
 *               text1:'text1',
 *               text2:'text2',
 *               text3:'text3'
 *          }
 *         
 *      }
 * })
 * 然后我们做了一个这么操作
 * this.text3 = 'modify text3';
 * 我们修改了text3的数据，但是视图不需要用到text3，所以不需要触发cb函数来更新视图
 *
 * 再来一种情况，一个全局对象我们可以能会在多个Vue对象中用到它进行展示：
 * let globaObj = {
 *      text1: 'text1'
 * }
 * let o1 = new Vue({
 *      template:
 *          `<div>
 *              <span>{{text1}}</span>
 *           </div>`,
 *      data: globaObj
 * }}
 * let o2 = new Vue({
 *      template:
 *          `<div>
 *              <span>{{text1}}</span>
 *           </div>`,
 *      data: globaObj
 * }}
 * 执行：globaObj.text1 = "hello text1"
 * 我们应该需要通知两个实例进行视图的更新，【收集依赖】会让text1知道有哪些地方依赖我的数据，变化的时候需要通知他们
 */

 class Dep {
     constructor() {
         //用来存放Watcher对象数组
         this.subs = []
     };
     /* 在subs中添加一个Watcher对象 */
     addSub(sub){
        this.subs.push(sub)
     };
     /* 通知Watcher对象更新视图 */
     notify(){
         this.subs.forEach((sub) =>{
             sub.update();
         })
     }
 }
 class Watcher{
     constructor() {
         // 在new Watcher对象时将该对象赋值Dep.target
         Dep.target = this;
     };
     // 更新视图的方法
     update(){
         console.log('升级版视图更新啦～')
     }
 }
 Dep.target = null