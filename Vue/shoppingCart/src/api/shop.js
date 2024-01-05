// shop?
// 大型项目 index.js 作为入口文件，引入所有的api文件，然后再暴露出去
// 每个模块的接口一个文件

// vuex 读|写 不能随便修改，要遵守流程
// A B 竞争关系 同时对 _products 进行修改   中央的vuex  统一管理
// -> actions(api)  -> mutations(回溯，记账一样) -> state
// 设计模式 难理解，复杂 pinia  一个新的状态管理库
// 以下划线"_"开头的变量，表示私有变量 只在本模块使用
const _products = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default {
    // 阅读后端接口文档，actions 要调用的方法
    getProducts(cb) {
        // 模拟ajax 要花时间
        // callback  await getProducts
        // return promise
        setTimeout(()=> cb(_products),100)
    },
    buyProducts(products,cb,errorCb){
        setTimeout(() => {
            // 抛硬币，模拟抢购成功或失败
            (Math.random() > 0.5) ? cb() : errorCb()
        }, 100)
    }
}