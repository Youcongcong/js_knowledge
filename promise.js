
// const promise = new Promise((resole,reject) =>{
//     console.log(1)
//     resole();
//     console.log(2)
// }).then(()=>{
//     console.log(3)
// })
// console.log(4)

// 1 2 4 3  Promise结构函数是同步执行的，promise.then中的函数异步执行的

const promise1 = new Promise((resole,reject)=>{
    resole('success1');
    reject('error');
    resole('success2')
}).then((res)=>{
    console.log('then:',res)
}).catch((err)=>{
    console.log('catch:',err)
})