const obj = {
    name: '张三',
    age: 40,
}

let newObj = Object.create(obj);
console.log(newObj.name);