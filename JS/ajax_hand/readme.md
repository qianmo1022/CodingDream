# 手写封装ajax函数，只考虑 get url ，思考 同步变异步

- promise
    ajax 是异步，放到promise里面？ async await
    1. Promise 实例化，经历以下流程
        - new 该做的 p 初始状态state = 'pending'
        - constructor executor 执行
        都是同步的
        - executor 是异步任务的容器
            executor同步，setTimeout/ajax/... 异步的 -> EventLoop
            resolve() 时 p.state = fullfilled
        - 流程怎么办

            - then  微任务  执行的机会是在 p.state.pending -> fullfilled
            - await 比then 更简洁，更像同步代码，resolve(data) data交给左边