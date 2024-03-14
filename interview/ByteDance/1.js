let obj = {
    a:1,
    b:undefined,
    c:{
        n: 2
    }
}
Object.defineProperty(obj,'d',{
    enumerable:false,
    value:3,
    writable:false,
    configurable:false
})

// console.log(obj.d);
function hasProperty(obj,key) {
    // return obj[key] !== undefined // 不能判断undefined
    // return Object.keys(obj).includes(key) // 当监听的属性是不可枚举的时候，这个方法就不行了
    // return obj.hasOwnProperty(key) // 只能判断显示属性，不能判断继承的属性
    return key in obj // 可以判断继承属性
}
console.log(hasProperty(obj,'d'));
console.log(hasProperty(obj,'toString'));