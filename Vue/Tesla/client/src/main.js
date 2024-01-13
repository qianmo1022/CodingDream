import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'animate.css/animate.min.css'
import 'animate.css'
import App from './App.vue'
import router from './router'

import './assets/reset.css'
const store = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store)
app.use(router)
// 影响页面加载速度 优化 应该按需加载
// app.use(ElPopover)
// app.use(ElButton)
app.use(ElementPlus)

app.mount('#app')