import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { router } from './router.js';
import App from './App.vue'

const app = createApp(App);
app.use(createPinia());
app.use(router);
// app.use(Swal());
app.mount('#app');
