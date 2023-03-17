import { createRouter, createWebHistory } from 'vue-router'
// rou
import Home from "../views/Home"
import Favourite from "../views/Favourite"
import ProjectDetails from "../views/ProjectDetails"
import NotFound from "../views/NotFound"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/project/:id',
        name: 'ProjectDetails',
        component: ProjectDetails,
        props: true
      },
    ],
  },
  {
    path: '/favourite-projects',
    name: 'Favourite',
    component: Favourite
  },
  // redirect
  {
    path: '/project',
    redirect: '/'
  },
  {
    path: '/projects',
    redirect: '/'
  },
  {
    path: '/favourite',
    redirect: '/favourite-projects'
  },
  {
    path: '/favourites',
    redirect: '/favourite-projects'
  },
  {
    path: '/favourite-project',
    redirect: '/favourite-projects'
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
})

export default router