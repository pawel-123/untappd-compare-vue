import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Comparisons from '../views/Comparisons.vue'
import Comparison from '../views/Comparison.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/comparisons/:comp_id',
    name: 'Comparison',
    component: Comparison
  },
  {
    path: '/comparisons',
    name: 'Comparisons',
    component: Comparisons
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
