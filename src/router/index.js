import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes/index.vue'
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
    component: Notes,
    children: [
      {
        path: 'javascript',
        name: 'javascript',
        component: () => import('../views/Notes/Javascript/index.vue'),
        children: [
          {
            path: 'js1',
            name: 'js1',
            component: () => import('../views/Notes/Javascript/js1.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
