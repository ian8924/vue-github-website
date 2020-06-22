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
          },
          {
            path: 'js2',
            name: 'js2',
            component: () => import('../views/Notes/Javascript/js2.vue')
          }
        ]
      },
      {
        path: 'vue',
        name: 'vue',
        component: () => import('../views/Notes/Vue/index.vue'),
        children: [
          {
            path: 'vue1',
            name: 'vue1',
            component: () => import('../views/Notes/Vue/vue1.vue')
          },
          {
            path: 'vue2',
            name: 'vue2',
            component: () => import('../views/Notes/Vue/vue2.vue')
          },
          {
            path: 'vue3',
            name: 'vue3',
            component: () => import('../views/Notes/Vue/vue3.vue')
          },
          {
            path: 'vue4',
            name: 'vue4',
            component: () => import('../views/Notes/Vue/vue4.vue')
          },
          {
            path: 'vue5',
            name: 'vue5',
            component: () => import('../views/Notes/Vue/vue5.vue')
          },
          {
            path: 'vue6',
            name: 'vue6',
            component: () => import('../views/Notes/Vue/vue6.vue')
          },
          {
            path: 'vue7',
            name: 'vue7',
            component: () => import('../views/Notes/Vue/vue7.vue')
          },
          {
            path: 'vue8',
            name: 'vue8',
            component: () => import('../views/Notes/Vue/vue8.vue')
          },
          {
            path: 'vue9',
            name: 'vue9',
            component: () => import('../views/Notes/Vue/vue9.vue')
          },
          {
            path: 'vue10',
            name: 'vue10',
            component: () => import('../views/Notes/Vue/vue10.vue')
          },
          {
            path: 'vue11',
            name: 'vue11',
            component: () => import('../views/Notes/Vue/vue11.vue')
          },
          {
            path: 'vue12',
            name: 'vue12',
            component: () => import('../views/Notes/Vue/vue12.vue')
          },
          {
            path: 'vue13',
            name: 'vue13',
            component: () => import('../views/Notes/Vue/vue13.vue')
          },
          {
            path: 'vue14',
            name: 'vue14',
            component: () => import('../views/Notes/Vue/vue14.vue')
          },
          {
            path: 'vue15',
            name: 'vue15',
            component: () => import('../views/Notes/Vue/vue15.vue')
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
