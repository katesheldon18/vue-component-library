import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/DocsHome.vue'),
  },
  {
    path: '/buttons',
    component: () => import('../pages/Buttons.vue'),
  },
  {
    path: '/forms',
    component: () => import('../pages/Forms.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router