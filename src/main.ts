import { createApp } from 'vue';
import Toast from 'vue-toastification';
import App from './App.vue';
import './assets/tailwind.css';
import "vue-toastification/dist/index.css";

createApp(App)
  .use(Toast, {
    transition: 'Vue-Toastification__bounce',
    maxToasts: 20,
    newestOnTop: true,
  })
  .mount('#app');
