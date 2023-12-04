<template>
    <div>
        <h2>首页</h2>
        <p>这是一个首页</p>
    </div>
    <nav>
        <router-link to="/home/newest">最新</router-link> |
        <router-link to="/home/recommend">推荐</router-link>
    </nav>
    <router-view></router-view>
</template>