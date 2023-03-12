import { createRouter, createWebHistory } from 'vue-router'
// rou
import Home from "../views/Home"
import Favourite from "../views/Favourite"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favourite-projects',
    name: 'Favourite',
    component: Favourite
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
})

export default router