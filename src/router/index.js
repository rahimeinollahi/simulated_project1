import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{transition:'ts-home'}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/website',
    name: 'website',
    component: () => import(/* webpackChunkName: "about" */ '../views/WebsiteDesin.vue'),
    meta:{transition:'ts-website'}
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/AboutUs.vue'),
    meta:{transition:'ts-aboutus'}
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => import(/* webpackChunkName: "about" */ '../views/Basket.vue'),
    meta:{transition:'ts-basket'}
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
