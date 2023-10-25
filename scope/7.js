// var obj = {
//     a:1,
//     b:2,
//     c:3
// }

// // obj.a +=1
// // obj.b +=1
// // obj.c +=1

// with(obj){
//     a+=1,
//     b+=1,
//     c+=1

// }

// console.log(obj);

function foo(obj) {
    with(obj){
        a=2
    }
}

var o1 = {
    a:3
}

var o2 = {
    b:3
}

foo(o2)
console.log(o2);
console.log(a);//with将a=2泄露到了全局