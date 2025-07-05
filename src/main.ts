import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router'
import './app/styles/global.scss'

createApp(App).use(router).mount('#app')