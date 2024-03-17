// 防抖函数接受两个参数：函数 func 和延迟时间 delay
function debounce(func, delay) {
    let timer; // 定义一个定时器变量，用于存储定时器ID
    return function() { // 返回一个新函数
      const context = this; // 保存函数执行时的上下文
      const args = arguments; // 保存函数执行时的参数
      clearTimeout(timer); // 清除之前的定时器
      timer = setTimeout(() => { // 创建一个新的定时器
        func.apply(context, args); // 在延迟之后执行函数
      }, delay);
    };
  }
                                                                                 