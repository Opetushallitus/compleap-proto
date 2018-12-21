import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Home,
      props: { welcome: true }
    },
    {
      path: '/authenticate',
      name: 'authenticate',
      component: () => import(/* webpackChunkName: "authenticate" */ './views/Authenticate.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "authenticate" */ './views/Profile.vue')
    },
    {
      path: '*',
      name: 'error',
      component: () => import(/* webpackChunkName: "error" */ './views/Error.vue')
    }
  ]
})
