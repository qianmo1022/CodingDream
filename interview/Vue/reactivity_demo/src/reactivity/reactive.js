import { mutableHandlers } from './baseHandlers'
// 可读性的接口
// Vue的API 比 React 好 API的简洁

// 缓存
// Vue组件代码可能很多，多人开发
export const reactiveMap = new WeakMap()
export function reactive(target) {
    // 提升可读性
    return createReactiveObject(
        target,reactiveMap,mutableHandlers
    )
}
// proxy区别与defineProperty 操作更多，模块化
function createdReactiveObject(target,proxyMap,proxyHandlers) {// proxyMap用来做缓存,proxyHandlers用来做拦截
    if (typeof target !== 'object' ) {
        console.warn(`reactive ${target} must be an object`);
        return target
    }
    const existingProxy = proxyMap.get(target)
    if (existingProxy) {
        console.log('------catched',target);
        return existingProxy
    }

    const proxy = new Proxy(target,baseHandlers)
    proxyMap.set(target,proxy)
    return proxy
}