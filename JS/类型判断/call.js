var obj = {
    a: 1,
    foo : foo
}

function foo (){
    console.log(this.a);
}

// foo.call(obj)//1

// Function.prototype.myCall = function (context) {
//     if (typeof this !== 'function') {
//         throw new TypeError('myCall is not a function')
//     }
//     context.fn = this
//     context.fn() //触发隐式绑定规则
//     delete context.fn

// }

Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('myCall is not a function')
    }
    let args = [...arguments].slice(1)//Array.from(arguments).slice(1)//取出除了第一个参数的其他参数

    context.fn = this
    let res = context.fn(...args) //触发隐式绑定规则,传入参数,展开数组
    delete context.fn
    return res
}

foo.myCall(obj)//1

// {
//     fn: foo
// }
// obj.fn()//1
// delete obj.fn

// obj.foo()//1