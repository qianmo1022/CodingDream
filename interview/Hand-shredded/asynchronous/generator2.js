// function* g() {
//     let a = 1
//     let b  = yield a++
//     console.log(b);
//     let c = yield a++
//     console.log(c);
// }

// let gen = g()

// console.log(gen.next()); // 读取到1，再释放当前yield
// console.log(gen.next(3)); // next可以接受参数，用于指定被我触发的yield表达式的返回值
// console.log(gen.next());// yield 表达式的值是由 next 方法传入的参数决定的。如果 next 方法没有传入参数，那么 yield 表达式的值就是 undefined

function* g() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    return 6
}
// Generator函数具有迭代器属性，所以可以使用for...of循环
for (let val of g()) { // 每次执行默认调用next方法，返回值就是当前的yield表达式的值
    console.log(val);
}