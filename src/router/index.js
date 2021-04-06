import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import AllComparisons from '../views/AllComparisons.vue'
import Comparison from '../views/Comparison.vue'
import MyComparisons from '../views/MyComparisons.vue'

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
    path: '/comparisons/users',
    name: 'MyComparisons',
    component: MyComparisons
  },
  {
    path: '/comparisons/:comp_id',
    name: 'Comparison',
    component: Comparison
  },
  {
    path: '/comparisons',
    name: 'AllComparisons',
    component: AllComparisons
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
