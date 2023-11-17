//手动实现一个深拷贝的方法
let obj = {
    name: '阿伟',
    age: 18,
    like: {
        type: 'coding'
    }
}

function deepClone(obj) {
    let objCopy = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {//obj[key]是引用类型
                objCopy[key] = deepClone(obj[key])
            } else {
                objCopy[key] = obj[key]
            }
        }
    }
        
    return objCopy//如果不写这句，那么递归的时候，就会返回undefined
}