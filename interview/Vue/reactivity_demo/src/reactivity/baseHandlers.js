const get = createGetter()
const set = createSetter()
// 浅，下一层就不监听了  {a:{b:2}} obj.a.b
function createGetter(shallow = false) {
    // 闭包  shallow
    // get 
    return function get(target,key,receiver){// target原对象 key属性 receiver代理对象
        // 映射 Reflect reflection ES6 新增的方法，在object的基础上，提供了一种更合理，更直观的操作方式
        // Reflect.get(target,key) === target[key]
        // proxy 做自动的懒代理
        const res = Reflect.get(target,key,receiver)
        track(target,"get",key)
        if(isObject(res)){
            return shallow ? res : reactive(res)
        }
        return res
    }
}
// {a:{b:{c:3}}，y:1}
// Proxy 优势 懒代理 性能
function createSetter() {

}

export const mutableHandlers = {
    get,
    set,
    // has,
    // deleteProperty
}

export const shallowReactiveHandlers = {
    get,
    set,
    // has,
    // deleteProperty
}