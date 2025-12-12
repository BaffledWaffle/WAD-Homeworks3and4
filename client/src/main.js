import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import font files
import '@/assets/styles/fonts/mont/Mont-HeavyDEMO.otf'
import '@/assets/styles/fonts/mont/Mont-ExtraLightDEMO.otf'

/* Common styles */
import './assets/styles/style.css'
import './assets/styles/media.css'

createApp(App).use(store).use(router).mount('#app')
