import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/Landing.vue'
import ConversionPage from '../pages/ConversionPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/democonvert',
    name: 'democonvert',
    component: ConversionPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
