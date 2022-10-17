import { createRouter, createWebHistory } from 'vue-router'
import Intro from '../views/Intro.vue'
import Certification from '../views/Certificateion.vue'

const routes = [
  { path: '/', name: 'intro', component: Intro },
  { path: '/certification', name: 'certification', component: Certification }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
