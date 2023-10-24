let a = 1//会报错，称为暂时性死区


function foo() {
    
    console.log(a);
    let a = 2
}

foo()