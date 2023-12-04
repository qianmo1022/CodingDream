<template>
  <!-- nav是导航栏 -->
  <nav>
    <router-link to="/home">首页</router-link> |
    <router-link to="/about">关于</router-link>

  </nav>


  <!-- 这里是路由匹配到的组件 -->
  <router-view></router-view>
</template>

<style>
#app {
  text-align: center;
  font-size: 40px;
}
</style>