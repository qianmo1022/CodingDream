# JS（V8）为什么要有异步？
因为JS是单线程编程语言,同一时间只能执行一个任务

# JS为什么不设计成多线程？（最初JS是浏览器的脚本语言）
1. 节约内存资源
2. 没有锁，解锁的过程，节约上下文切换的时间

# 请你聊一聊异步的发展史
- 是什么
    JS中从最早的异步处理方式到现在的最新的异步处理方式

- 发展史
1. 回调函数：代码维护困难（回调地狱）
2. Promise：解决了回调地狱的问题，但是代码维护仍然困难
    一、维护了一个状态，status，值为: pending(默认), fulfilled/resolved(成功), rejected(失败)，
    目的是让Promise的状态一经改变，无法再次修改，也就保证了then和catch不可能同时触发
    二、内部的resolve函数会修改status为fulfilled，并触发then中的回调
    三、then:
    1. 默认返回一个Promise对象，状态为fulfilled
    2. 当then前面的Promise状态为fulfilled时，then中的回调函数直接执行
        当then前面的Promise状态为rejected时，then中的第一个回调函数不执行，执行then中的第二个回调函数或者catch中的回调函数
        当then前面的Promise状态为pending时，then中的回调需要被缓存起来交给resolve或者reject来执行
3. Generator
    1. 可以分段执行，可以暂停
    2. 可以控制每个阶段的返回值
    3. 可以知道是否执行完毕
    4. 可以借助 Thunk 和 co 模块 处理异步，但是写法复杂，所以generator函数的意义其实是为了打造 async和await

4. async/await:
    1. ES6提供的一种新的处理异步代码的方案
    2. 没有错误捕获机制
    3. async/await 是由 Promise + generator 来实现的，本质是在generator的基础上通过递归的方式来自动执行一个又一个
    的next函数，当done为true时，结束递归
