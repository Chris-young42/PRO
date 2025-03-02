import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import dashboard from '@/components/Layout/dashboard.vue'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: dashboard
    },
    {
      path:'/home',
      name: 'HomeView',
      component: HomeView
    }


  ],
})

export default router
