# 企业级开发

- 代码的健壮性
    校验一下参数
    进程的安全性
    JS是单线程语言 简单 + event_loop    太脆了
    throw + try  catch()

- cache 自由变量 key 的设置 
    1 + 12      11 + 2   '1,12'     '11,2'
    - arguments 伪数组  兼容性不太好
    [...arguments].join('')
    Array.from(arguments)
    Object.prototype.toString
    Array.prototype.join.call(arguments)借用数组的方法，对arguments执行操作
    [1,2,3].join(',')//this 指向数组

- fabonacci 爬楼梯
    - 递归的通用问题，不停地入栈
        自顶向下    CEO     递归的不停地入栈
    - 记忆函数 备忘录
    - 自底向上  
        f(1) = 1 f(2) = 1   f(3) = f(1) + f(2)
        f(n) = f(n-1) + f(n-2)

- 使用递归，快速地，基于自顶向下的思想来解决问题
    - 程序栈的问题  40%
- 可以使用memoize 备忘录模式，优化
    空间{   } key:value
- 都可以自下向上解决，每一步都有一个公式 f(n) = f(n-1)+f(n-2)
动态规划 dp
    for 循环 （自底向上） 88%
- 99.9%
    空间再优化  不需要数组，我们只要最后的结果
    [a,b] = [b,a+b]