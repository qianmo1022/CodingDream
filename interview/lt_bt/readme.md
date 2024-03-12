## 蔚来面试

- 合肥 蔚来 内部系统开发
    周三 半个月 B站

### 一面
- 前端理解
- 怎么学习
- 项目上线
- 样式布局
- 登录 jwt cookie session

### 二面
性格

提前去思考这些问题，整理话术，互相模拟面试

一面面试官是用人的，有1个hc的人
二面一般是一面的leader 一面反馈的帮再把关 有决定权 


## B站

- 时长
    70分钟  50-80分钟
    不用追问 自问自答
    拿下一面

- git命令   加强
    git init ...... git push git clone
    撤回 灵机一动
    branch
    git rebase 变基

- == 与 === 的区别

- Vue的响应式原理 ref reactive手写 深度 vue源码的学习
    - Proxy（对象）
    - defineProperty（属性）
    - vue2/Vue3 区别
        数组 增改
    - 追问，依赖收集
    - watcher 设计模式

- 如何调试自己的代码
    - 断点调试 逐步跟踪，变量的值
    - console.log()
    - vue的devtool 数据状态与界面
    - console.time console.timeEnd 性能优化测试
    - 浏览器自带性能面板
    - postman 模拟请求 测试接口 restful
        restful是 API风格 Method+URL 一切皆资源
        GET / get 列表页 读   /post/:id 
        POST / post 写
        DELETE / delete 删除
        PUT / PATCH 修改 PUT用于文件上传修改(改头像，整体修改)    PATCH用于部分修改(修改部分字段)
        OPTIONS / options 服务器端接口权限

- 网络请求

- 状态码 深入

    304 实现

- node 的 stream
    JAVA 的流   二进制流

- vuex/pinia
    - 父子/兄弟组件通信之外 vuex/pinia 让状态在任何组件之间共享
    - store
        应用 = 状态存储 + UI组件 组件更专注于界面开发
    - 购物车 / 登录状态
    - pinia 持久化储存
    - vuex 的缺点 不太好理解 mutations
    - pinia 的优点 hooks 函数化 灵活 对TS的支持更好

- 持久化存储
    localStorage + JSON.parse() JSON.stringify()

- JWT

- 深度优先搜索 DFS BFS

- 面的怎么样，如何学习？
    学习建议
    机会难得
    AIGC 快速学习 高效开发 代码助理 

- 生命周期 深入 created和mounted
    父子组件
    父 created
        子 created
        子 mounted
    父 mounted

- 手写ts 刷一点
    interface type 的区别
        :string[]

- 盒模型 布局

- 是否链表有环 双指针

总结：
    TOP20的面试难度，主要在于全面的基础能力 算法、Vue、基础、JS/CSS八股   情商

## 字节跳动

- 树的遍历
    用递归的概念来定义一颗树
    先、中、后序遍历   根节点出现顺序
    BFS DFS ? 迷宫问题?

    想起那张图
    执行结果
    - 深度优先 适合递归

- 列表组装成树状结构
    - 经典题
    - 树型
    - 常见困难开发点拿出来
        - 多级菜单、省县市选择 选择的需求
        - 列表 后端传过来的数据项  一条条记录
        - 任务 拼成树型结构
            显示菜单、切换地址选项等树形操作
        - 两重for循环 O(n^2)

- 编写一个类EventEmitter，实现自定义事件
    - 前端 addEventListener click内置事件
    - 订阅发布者模式 经典的设计模式
    - 实现一个EventEmitter 类 on emit off once
    - node 内置了EventEmitter 可以直接继承使用
