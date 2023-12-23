import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";

const app = createApp(App)

app
    // .use(router) // SPA路由
    .use(createPinia()) // 统一管理数据 相当于会计
    .mount('#app') // UI组件

