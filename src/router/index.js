import { createRouter, createWebHistory } from 'vue-router'
import CostCalculatorView from '@/views/CostCalculatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CostCalculatorView
    }
  ]
})

export default router
