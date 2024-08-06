import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/',
      name: '/',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          //這是指當訪問
          path: '',
          name: 'Home',
          component: () => import('@/views/users/index.vue')
        },
        {
          //這是指當訪問
          path: '/1-1',
          name: '1-1',
          component: () => import('@/views/login/1-1.vue')
        },
        {
          path: '/1-2',
          name: '1-2',
          component: () => import('@/views/login/1-2.vue')
        },
        {
          path: '/1-3',
          name: '1-3',
          component: () => import('@/views/login/1-3.vue')
        },
        {
          path: '/1-4',
          name: '1-4',
          component: () => import('@/views/login/1-4.vue')
        },
        {
          path: '/1-4-1',
          name: '1-4-1',
          component: () => import('@/views/login/1-4-1.vue')
        },
      ]
    }

  ]
})

export default router
