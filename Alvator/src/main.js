import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'

import { register } from 'swiper/element/bundle';
register();

const app = createApp(App)



app.mount('#app')


