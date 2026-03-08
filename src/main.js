import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <-- 1. Importas el archivo que me acabas de mostrar

// Importaciones de estilos (ajusta las rutas si es necesario)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './scss/styles.css' 

const app = createApp(App)

app.use(router) // <-- 2. Le dices a la aplicación que use el mapa de rutas

app.mount('#app')