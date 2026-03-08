// 1. Importaciones principales de Vue
import { createApp } from 'vue';
import App from './App.vue';

// 2. Importaciones de estilos y Bootstrap (dejamos las que tenías)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/styles.css';



// 3. Montar la aplicación Vue
createApp(App).mount('#app');