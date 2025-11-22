import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Common styles */
import './assets/styles/style.css'
import './assets/styles/media.css'

createApp(App).use(store).use(router).mount('#app')
