import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login'
import reg from '../pages/reg'
import home from '../pages/home'
import movie from '../pages/movie'
import book from '../pages/book'
import status from '../pages/status'
import group from '../pages/group'
import detail from '../components/detail'
import search from '../pages/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/status',
      name: 'status',
      component: status
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
  ]
})
