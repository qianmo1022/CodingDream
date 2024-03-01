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

3. then:
    1. 默认返回一个Promise对象，状态为fulfilled
    2. 当then前面的Promise状态为fulfilled时，then中的回调函数直接执行
        当then前面的Promise状态为rejected时，then中的第一个回调函数不执行，执行then中的第二个回调函数或者catch中的回调函数
        当then前面的Promise状态为pending时，then中的回调需要被缓存起来交给resolve或者reject来执行

