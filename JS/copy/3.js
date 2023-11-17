// 浅拷贝的实现原理
let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    }
}
let arr = ['a', {n: 1}, 1, undefined, null]

function shalldowCopy(obj) {
    // let newObj = {}
    // if (obj instanceof Array) {
    //     newObj = []
    // }

    if (typeof obj !== 'object' || obj === null) return // 只拷贝引用类型的数据，基本类型的数据直接返回,因为基本类型的数据是不可变的，不需要拷贝
        let newObj = obj instanceof Array ? [] : {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

let newObj = shalldowCopy(arr)
// obj.like.type = 'swimming'
console.log(newObj);
