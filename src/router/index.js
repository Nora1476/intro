import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'intro', component: () => import('../views/Intro.vue') },
  { path: '/certification', name: 'certification', component: () => import('../views/Certificateion.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
