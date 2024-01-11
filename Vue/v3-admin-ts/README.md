- 何为TypeScript
   JavaScript 的超集

- 如何使用ts？
   - 想js一样来写
   - 加点啥？
      - 类型检测
         你在乎的地方 -> 数据

## 项目亮点
- 使用了ElementPlus
   - 登录注册页面，表单
      - 表单的目的是收集数据，:model="" 进行双向绑定
         每一个el-input v-model=".username"
         - 表单的校验配置一下就好
         - 用户体验做好
            - 自动聚焦
            - @keyup.enter(事件修饰符)
         - ref 属性 DOM 标记
            - const login = ref()   // null
            - mouted <form ref="login">
         - 表单提交
            - validate 

- 为什么element-plus 图标要搞的这么复杂呢？
   - 按需加载
      图标库有点大，如果用户使用了别的图标，省空间
   - 其他的选择
   - 单独安装图标库
      app.component()全局挂载一下 用到哪些就挂载哪些

## ts
- 当做js写就好，再做点加法
- 最关心的数据
   - ref
   - reactive
   - props
   - store
- 函数的参数

## vue 考题
- <component :is="comName" />
   循环或动态输出组件
- <template />
   slot
   不会显示到页面上 接受指令 不添加标签

## 项目亮点
   - 带有角色校验的菜单
      - 菜单
         el-menu>el-submenu>el-menu-item
      - 当前选中的菜单
         :default-active="route.path"
      - 哪些菜单可以看到？
        指令？ 自定义指令
        store->permiss roleList user includes ?
        添加一个数据项 key 任何组件都可以调用
        setKeys action
        localStorage 读取
   - 自定义指令
      app.directives(name)
      v-name
      mounted(el,binding)
      el['hidden'] = true
      el.style.opacity = 0; // 隐藏 等价于 v-show的效果

## 项目难点
   - 多组件状态的共享和设计
      - vuex和pinia
         - 用pinia  vuex中有modules需要遵守树状关系 但是pinia中没有，所以pinia很灵活，加一个defineStore方法
            没有vuex的树状约束 执行一下函数就能拿到hook
            语法简洁，不用写很多代码
         - 学vuex 的设计模式，state mutation action getter 安全
      - 学习过一些项目 GitHub 开源 vue-music
         vue-admin。。。
      - 因为当我在多个组件，特别是兄弟或跨页面级别组件，
         有共享状态需求的时候，我封装成了一个store函数
         原来是用ref + props + emits 换成了 store



