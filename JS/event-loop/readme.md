# 进程 VS 线程

- 进程：CPU运行指令和保存上下文所需要的时间

- 线程：进程中的更小的单位，描述的是一段指令执行所需的时间

## 浏览器新开一个tab页面，就是新开一个进程
需要多个线程配合才能完成页面的展示
1. 渲染线程（GPU）
2. http请求线程
3. JS引擎线程

渲染线程（GPU） 和 js引擎线程 是互斥的

# JS 单线程语言
JS在开发时被设计为单线程是因为其为浏览器脚本语言，为了降低功耗，减少性能占用
优点：
1. 节省内存
2. 单线程没有锁的概念，从而节省上下文切换时间


# 异步 分为宏任务和微任务
- 宏任务（macrotask）异步执行：
script,
setTimeout
setInterval（设置固定的时间间隔执行）
setImmediate(DOM结构何时加载完毕，才执行)
I/O
UI-rendering（页面渲染）


- 微任务（microtask）
promise.then()（promise的执行属于同步，promise.then的执行才属于异步）
MutationObserver（监听DOM结构，变更再执行）
Process.nextTick()

# event-loop（事件循环机制）
1. 执行同步代码（这属于宏任务）
2. 当调用栈为空，查询否有异步代码需要执行
3. 执行微任务
4. 如果有需要，会渲染页面
5. 执行下一轮宏任务(这也叫下一轮的event-loop的开启)