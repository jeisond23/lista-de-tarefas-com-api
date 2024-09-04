import { createApp } from 'vue'
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/css/style.css';
import App from './App.vue'


createApp(App)
    .use(router)
    .use(store)
.mount('#app')
