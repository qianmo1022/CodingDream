// 回调解决异步问题，但是回调会导致回调地狱，代码不好维护 
function a () {
    setTimeout(() => {
        console.log('阿臻')
        b()
    }, 1000)
}

function b () {
    setTimeout(() => {
        console.log('10亩地')
    }, 0)
}

a()

