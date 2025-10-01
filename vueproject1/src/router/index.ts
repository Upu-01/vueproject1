import Admin from '@/pages/Admin.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/Admin", component: Admin, name:"Админка"}
  ],
})

export default router
