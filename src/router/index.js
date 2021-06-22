import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.view.vue'
import Flex from '../views/flex.view.vue'
import Grid from '../views/grid.view.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/flex',
    name: 'Flex',
    component: Flex
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
