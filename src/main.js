import './css/main.scss';
import '@coreui/coreui/dist/css/coreui.min.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
