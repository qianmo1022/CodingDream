# 生命周期
	Vue 自带的生命周期在uniapp中都能使用

# 页面生命周期
	uniapp 提供了页面生命周期，比如上拉加载，下拉刷新，页面渲染完成。。。钩子函数
	
# 应用生命周期
	整个 app 的状态变化，只能在 App.vue 里面使用
	
# 全局变量
1. Vue.prototype.name = 'test' //options API 才可以使用
2. 在App.vue 中设置
```javascript
		globalData:{
	name:'全局的名称'
},
```
需要使用的地方：const name = getApp().globalData.name // uniapp提供，vue中不可
3. Vuex

# 页面跳转