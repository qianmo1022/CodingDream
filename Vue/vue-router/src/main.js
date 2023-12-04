import { createApp } from 'vue'
import App from './App.vue'
import router from './router'//可以省略index.js，因为index.js是默认的文件名

createApp(App).use(router).mount('#app')
