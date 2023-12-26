import { createRouter, createWebHistory } from 'vue-router'
import ShoppingList from '@/components/ShoppingList.vue'

const routes = [
   {
     path: '/',
     name: 'ShoppingList',
    component: ShoppingList
   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
