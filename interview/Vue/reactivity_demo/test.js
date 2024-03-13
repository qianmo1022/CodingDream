// Vue的跨端功能  effect收集依赖  大前端
// 浏览器端（PC端和mobile端），小程序端（WXML），服务器端（没有视图DOM，有虚拟DOM），客户端（App uniapp）
// exe桌面端（Windows，Linux）

// Vue模块化 响应式模块 独立于其他模块
// UI(渲染)模块 独立出来

// 一份代码打包成各种应用，uniapp Vue UI模块独立于其他模块
// UI模块，可拔插的

// 响应式和虚拟DOM
// {
//     "el":{
//         data() {
//             name:'hello',
//             age:18
//         },
//     }
// }

// 虚拟DOM描述了真实DOM，在多端都有用，同一份虚拟DOM按照不同端的渲染规则渲染出不同的真实DOM
// 现代UI开发的核心 = 响应式 + 虚拟DOM MVVM
// 依赖收集使得程序员聚焦于业务，而不是api

const { effect,reactive } = require('./src/reactivity')

let dummy
// 响应式机制的主要功能是：把普通JavaScript对象封装成为响应式对象
// 拦截数据的获取和修改操作，实现依赖数据的自动化更新 get和set
const counter = reactive({num1:1,num2:2})
// 注册回调函数，响应式地通知effect 执行函数
effect(() => {
    dummy = counter.num1 + counter.num2
    console.log(dummy)
})
setInterval(() => {
    counter.num1++
},1000)
