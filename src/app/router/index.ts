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
    path: '/notes',
    component: () => import('../pages/Notes.vue'),
  },
  {
    path: '/toasts',
    component: () => import('../pages/Toasts.vue'),
  },
  {
    path: '/accordions',
    component: () => import('../pages/Accordions.vue'),
  },
  {
    path: '/checkbox',
    component: () => import('../pages/Checkboxes.vue'),
  },
  {
    path: '/atoms',
    component: () => import('../pages/Atoms.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router