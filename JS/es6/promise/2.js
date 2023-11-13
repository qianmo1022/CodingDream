function xq(){
    return new Promise((resolve, reject) => {//resolve和reject是两个函数,resolve是异步操作成功后的回调函数,reject是异步操作失败后的回调函数
        setTimeout(() => {
            console.log('龙哥相亲了！');
            resolve('相亲成功！')
        }, 2000);
    })

}

function marry(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('龙哥结婚了！');
            resolve('结婚成功！')
        }, 1000);
    })
}

function baby(){
    setTimeout(() => {
        console.log('龙哥有了小龙崽！');
    }, 500);
}

function baby2(){
    setTimeout(() => {
        console.log('龙哥有了小龙女！');
    }, 300);
}

xq().then((res) => {
    console.log(res);
    return marry() // return覆盖了then默认的Promise返回值,所以后续的then会接收到marry()的返回值
    //如果不return，后续的then会接收到xq()的返回值，两个.then相当于异步执行
})
.then((res2) => {
    console.log(res2);
    baby()
})