// const obj = {age: 18}
// obj.age = 20

// console.log(obj.age); // 20

// let a
// console.log(a); // undefined

// console.log(age);// undefined
// var age = 18;

// console.log(age);
// let age = 18;

// var a = 1;
// var a = 2;
// console.log(a); // 2

// let a = 1;
// let a = 2;
// console.log(a); // Identifier 'a' has already been declared

// 暂时性死区
let a = 1;
if (true) {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 2;
}
var b = 1
if (true) {
    console.log(b); // 1
    var b = 2;
}
