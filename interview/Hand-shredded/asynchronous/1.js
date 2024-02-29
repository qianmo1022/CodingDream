let a = 1

setTimeout(() => {// 线程2  锁  解锁
    a = 10
}, 1000)

setTimeout(() => {// 线程3
    a = 20
}, 1000);

let b = 3

console.log(b);