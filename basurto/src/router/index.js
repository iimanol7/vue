import HomeView from '@/views/HomeView.vue'
import Bienvenida from '@/components/Bienvenida.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TodosServicios from '@/views/todosServicios.vue'
import ServiciosPabellon from '@/views/serviciosPabellon.vue'
import Favoritos from '@/views/Favoritos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'bienvenida',
          component: Bienvenida,

        },
        {
          path: 'todosServicios',
          name: 'todosServicios',
          component: TodosServicios,
        },
        {
          path: 'serviciosPabellon',
          name: 'serviciosPabellon',
          component: ServiciosPabellon,
        },
        {
          path: 'favoritos',
          name: 'Favoritos',
          component: Favoritos,
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
