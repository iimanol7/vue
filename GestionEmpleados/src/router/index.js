import AddEmployee from '@/views/AddEmployee.vue'
import EmployeeList from '@/views/EmployeeList.vue'
import EmployeeStats from '@/views/EmployeeStats.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path : '/employees',
      component: EmployeeList
    },
    
    //lazy loading (solo carga cuando es necesario)
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
