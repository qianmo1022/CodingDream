# 机器学习任务
transformers huggingface的核心库
- pipeline 分发任务
    pipeline(task,model)
- 数组和 hashTable|Dict 的相同点
    - 相同点
        数据容器 线性
    - 区别
        数组，dict （时间复杂度o（1））和 栈 队列 链表 组别在于数据在内存空间连续和不连续 
        非线性  树 图
        查找线性容器里 是否有5？

- transformers 支持哪些 NLP 任务
    SUPPORTED_TASKS 常量
    item 值是一个Dict 相当于JS的JSON
    for k,v in  解构           for 计数循环
    《图解 HTTP 协议》
    《计算机组成原理》（字节跳动）
- 读/写 操作系统    I/O 操作 Input->内存 Output->硬盘
    同步代码 I/O 远程->内存|硬盘 网络传输的耗时
    for()   ms 结束 多进程切换 轮循
    阻塞 
- 人生苦短，我用python
    - requests  用于网络请求
    requests.get(url, stream = True).raw
    "get"是http的请求的方法 get 表示明文请求 eg:<a>
    post 提交表单
    - PIL库 图片的读写等功能...
        Image   r
        ImageDraw   w
    - object-detection    

