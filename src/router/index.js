import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/notes',
    name: 'notes',
    component: Notes
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
