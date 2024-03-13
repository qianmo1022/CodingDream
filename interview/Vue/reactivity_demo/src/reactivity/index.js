// 一个简单的响应式模型，通过reactive/ref，把数据包裹成响应式对象
// 并且通过effect函数注册回调函数，然后再修改数据后，响应式地通知effect去执行回调函数即可

// 大型项目都会再每个模块（目录）下统一向外输出，清单的功能
// WeakMap 弱引用 会自动回收内存，避免内存泄漏
export {effect} from './effect'
export {reactive} from './reactive.js'
export {ref} from './ref'