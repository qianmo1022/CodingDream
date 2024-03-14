function timeout(time,num) {
    setTimeout(() => {
        console.log(num + '号任务已执行')
    }, time)
}

// setTimeout不是JS的方法,是浏览器的方法
// JS提供了webworker，可以让JS具有多线程的能力

timeout(10000,1)
timeout(5000,2)
timeout(3000,3)
timeout(4000,4)
timeout(5000,5)

// 23145