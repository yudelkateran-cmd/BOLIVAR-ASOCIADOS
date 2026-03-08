import { createRouter, createWebHistory } from 'vue-router';
// 1. IMPORTANTE: Cambia App.vue por Inicio.vue

import Proyectos from './Proyectos.vue';
import Inicio from './Inicio.vue';

const routes = [
  // Ahora '/' cargará el contenido de Inicio.vue (carrusel, sobre nosotros, etc.)
  { path: '/', component: Inicio },
  // '/proyectos' cargará tu galería de fotos
  { path: '/proyectos', component: Proyectos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;