import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import defaultLayout from '../layouts/defaultLayout.vue'
import blankLayout from '../layouts/blankLayout.vue'
import Error from '../views/Error.vue'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { Layout: defaultLayout },
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      meta: { Layout: blankLayout },
      component: LoginView,
    },
    {
      path: '/404',
      name: 'error',
      meta: { Layout: blankLayout },
      component: Error,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
    },
  ],
  linkActiveClass: 'font-bold',
})

router.beforeEach((to, from) => {
  return  true
})
export default router
