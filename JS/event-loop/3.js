console.log('script start')
async function async1() {//async声明的函数返回的是一个promise对象，执行使相当于同步代码
    await async2() //浏览器给await开小灶，相当于紧跟在await后面的代码变为同步代码
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()
setTimeout(function () {
    console.log('setTimeout')
}, 0)
new Promise(resolve => {
    console.log('Promise')
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    })
console.log('script end')