# vue3全家桶 MVVM

- vue 响应式组件开发
    - components
        - common
        - 业务组件
    - views/
    - UI组件库 element-plus
- vue-router
    前端有了路由
    SPA(单页应用开发) 快 不需要传统的http request + response
    优点：页面不会白一下重新渲染
    缺点：SEO 
- vuex/pinia    类似公司中的财务
    前端可以管理数据
    - 确保数据流的正确性
        数据在组件里叫什么？ 状态
    - 将数据与组件剥离，UI组件更单纯

- vue 项目 数据 从后端到页面显示    经过的所有流程和关键环节
    todos
    mysql/mongondb db/todos table
    sql 
    java/node 内存 MVC
    router
    res
    http GET :3000/todos 
    axios http.js index.js getTodoList
    store actions -> mutations -> state
    组件 views/ -> props 传给子组件（UI化）
    UI Component + State + Router = SPA
    UI Component + State = App

- pinia?
    - 更简单
        store/todo.js defineStore 返回值命名 useTodoStore（use- 作为开头）
        函数返回 state
        import { useTodoStore } from './store/todo.js'
        cosnt { todos } = useTodoStore()
    - 更现代
        hooks 编程 use 开头
    - 将数据和UI组件分离