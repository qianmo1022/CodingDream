Object.prototype[Symbol.iterator] = function () {
    return Object.values(this)[Symbol.iterator]()// 将数组上的迭代器返回给Object
}

var [a,b] = {a:1,b:2}

console.log(a,b);


// iterable
// {
//     [Symbol.iterator]: function () {
//         return 迭代器
//     }
// }

// function* foo() {

// }

// let gen = foo()

// gen.next()