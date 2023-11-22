function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步A完成');
            resolve();
        }, 1000);
    });
}

function B() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步B完成');
            resolve();
        }, 500);
    });
}
function C() {
    setTimeout(() => {
        console.log('异步C完成');
    }, 100);
}

A()
.then(() => {// .then 虽然会返回一个promise对象，但是当.then的回调有人为返回一个promise对象时，.then默认的返回值会被覆盖
    return B();
})
.then(() => {
    C();
});