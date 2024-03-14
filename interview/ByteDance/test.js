let obj = {
    a:1,
    b:2
}

let n = obj.a

Object.defineProperty(obj,'c',{// vue2的响应式原理,数据劫持
    // get(){
    //     return n;
    // },
    // set(newVal){
    //     n = newVal;
    // },
    enumerable:false,// 是否可以被枚举
    writable:false,// 是否可写
    value:100,// 设置默认值
    configurable:false// 是否可以配置（删除）
})

// for(let key in obj){
//     console.log(key);
// }

// obj.a = 5;
// delete obj.a;

console.log(obj.c);