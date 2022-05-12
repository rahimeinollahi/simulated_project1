import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/******************************************************/
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
/******************************************************/

import './scss/index.scss'
createApp(App).use(router).mount('#app')
