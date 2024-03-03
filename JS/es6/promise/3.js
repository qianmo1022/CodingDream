function a(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            reject('yes');
        }, 1000);
    })
}

function b(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            resolve();
        }, 1500);
    })
}

function c(){
    console.log('c');
}
// all 必须要接收到的所有的Promise状态都为resolve，then才会调用
Promise.all([a(), b()]).then(c)
// race 只要有一个resolve或者reject，then就会调用
Promise.race([a(), b()]).then(c).catch(err)