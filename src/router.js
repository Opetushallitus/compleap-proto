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
      path: '/welcome/:userId?',
      name: 'welcome',
      component: Home,
      props: (route) => ({
        default: true,
        welcome: true,
        userId: route.params.userId || '1001'
      })
    },
    {
      path: '/yourpath',
      name: 'yourPath',
      component: () => import(/* webpackChunkName: "path" */ './views/YourPath.vue')
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
      path: '/education',
      name: 'education',
      component: () => import(/* webpackChunkName: "education" */ './views/Education.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import(/* webpackChunkName: "jobs" */ './views/Jobs.vue')
    },
    {
      path: '*',
      name: 'error',
      component: () => import(/* webpackChunkName: "error" */ './views/Error.vue')
    }
  ]
})
