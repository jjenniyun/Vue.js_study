import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router_make from './router.js'

createApp(App).use(router_make).mount('#app')
