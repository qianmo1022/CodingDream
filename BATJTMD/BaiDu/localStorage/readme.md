# 百度考点

- 前端考点
    - JS语法
        小黄书
    - HTML5
        LocalStorage 前端持久化存储
        浏览器的能力提升
        属于BOM
    - DOM BOM
    - css3/less/tailwindcss
    - VUE/React
    - Webpack 前端 工程化
    - node 大前端 后端的
    - ES6+

- localStorage 
    html5提供的持久化存储能力
    localStorage.getItem(KEY)
    localStorage.getItem(KEY,value)
    移除 使用localStorage.removeItem(KEY)
- HTML5的表单能力
    - 提升用户体验
        如果用户在提交表单时，受挫，要考虑小白的使用体验
        尽量避免小白用户犯错
        required
        placeholder=""
        required:必填,placeholder:提示 
- JSON.parse + JSON.stringify
    localStorage不能存对象， toString

- label + input + 事件冒泡 用户体验优化
    label for = input 扩大操作范围，提升用户体验 特别是移动端
    事件监听只能在一个元素上，所以列表一定要做事件委托
    用冒泡机制 只监听父元素上的事件

- populateList 封装
    Don't repeat yourself!
    const items = JSON.parse() || []