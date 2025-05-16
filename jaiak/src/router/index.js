import Estadisticas from '@/views/Estadisticas.vue'
import Home from '@/views/Home.vue'
import ProximasFestividades from '@/views/ProximasFestividades.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       path: '/',
       name: 'home',
       component: Home,
     },
     {
      path: '/proximas',
      name: 'proximas',
      component: ProximasFestividades,
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: Estadisticas,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
