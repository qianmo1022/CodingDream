# TypeScript 让工资+10%
- 让前端像java一样写大型项目  代码一万行+
- vue/react + typescript 
- es6
   弱类型还是没有，优点：写起来简单，缺点：容易出问题
   let banner:[int] = [1,2,3]
- typescript 是js的超集
- 给项目引入前端模型层
   - 路由已经不是后端的，前端也可以有
   - 前端也可以有自己的模型，MVVM

- UI组件和数据管理的分离
   - store / components|views
   - pinia defineStore('todos', () => {
      return {
         state,
         ...actions
      }
   })    useTodosStore
   - vue ref 
   - 这里是唯一请求axios 接口的地方
   - app.use(createPinia())
   - 引入这个模块，执行useTodosStore
const {todos} = toRefs(useTodosStore())
const {getTodos} = useTodosStore()

- vue项目开发设计模式
   - 越复杂的，只要是流程，其实很简单，只不过需要一本说明书
   - UI组件 + 数据管理
   - 数据的流向
      backend -> models -> api -> store -> component 
   - SPA
      router -> views -> components
   - APP = VUE + VueRouter + pinia + ts
   - 写 UI 组件
      Element-Plus(要熟悉) + views + components(common|components) + 
      Tailwindcss(要熟悉) + 组件设计艺术 

- App.vue 一个个组件慢慢搭
   <>defineProps
   - 第一个阶段不要用ts

