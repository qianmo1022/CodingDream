// node 后端自定义事件
// node commonjs
// mjs使用ES6 module
// babel 转译 es6 -> es5 就像 style -> css
const geektime = require('./geektime.js')
// 注册了一个newlesson自定义（相对于click等系统自带）事件 
// 回调函数
// 添加自定义事件的能力
geektime.on('newlesson', ({price}) => {
    console.log('yeah! new lesson');
    if(price < 80){
        console.log('buy it')
    }
})

// setTimeout(() => {
//     for(let i = 0; i < 100 ; i++){
//         geektime.on('newlesson',({price}) => {
//             console.log('hehe',price);
//         })
//     }
// }, 10000);