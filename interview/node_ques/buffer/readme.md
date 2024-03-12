## node 是大厂有区分度的考点

- buffer
    fs net process(进程)

    进程  分配资源的最小单元
    内存的 cpu 外存 显示
    内存分配    起始 -> 结束
    CPU 轮循
    线程  执行程序的最小单元
    进程揽活，让线程去执行
    JS 单线程   
        简单好用 早期就是执行一些交互
        同步任务快速执行，复杂任务交给event loop
        脆弱    容易挂  挂了重启，使用pm2
        多核CPU 
        node 后端主流，异步（是优点）无阻塞（no blocking）

    JAVA多线程
        JAVA/PHP 同步(缺点)
        好多用户同时并发访问
        1w人 node 只需要JAVA一半的服务器 是项目的主要成本

    nginx 负载均衡服务器 只负责调度 集群里哪些服务器忙，服务器闲 选择一台机器执行程序
    www.baidu.com 肯定不是一台服务器
    DNS(分布式IP地址数据库)解析  nginx服务器 代理 服务器集群


