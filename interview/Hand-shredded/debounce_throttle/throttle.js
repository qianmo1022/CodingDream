// 节流函数接受两个参数：函数 func 和间隔时间 delay
function throttle(func, delay) {
    let lastTime = 0; // 定义一个变量，用于存储上一次函数执行的时间戳
    return function() { // 返回一个新函数
      const context = this; // 保存函数执行时的上下文
      const args = arguments; // 保存函数执行时的参数
      const currentTime = new Date().getTime(); // 获取当前时间戳
      if (currentTime - lastTime > delay) { // 判断当前时间与上一次执行时间的间隔是否大于指定的间隔时间
        func.apply(context, args); // 如果大于间隔时间，则执行函数
        lastTime = currentTime; // 更新上一次执行的时间戳
      }
    };
  }
  