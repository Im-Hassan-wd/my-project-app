import { createRouter, createWebHistory } from 'vue-router'
// rou
import Home from "../views/Home"
import Favourite from "../views/Favourite"
import ProjectDetails from "../views/ProjectDetails"

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
  {
    path: '/project/:id',
    name: 'ProjectDetails',
    component: ProjectDetails,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
})

export default router