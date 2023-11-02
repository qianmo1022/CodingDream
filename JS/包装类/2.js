let obj = {
    name :'丁真',
    age: 18
}

// console.log(obj['name']);
// obj.girlFriend = '翠花';

let girl = 'girlFriend'
obj[girl] = '小红'

delete obj.girlFriend//删除属性,或者delete obj[girl],girl是变量


console.log(obj);