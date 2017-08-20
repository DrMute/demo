import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from '@/components/home'
import page01 from '@/components/page01'
import page02 from '@/components/page02'
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/page01',
      name: 'page01',
      component: page01
    },
    {
      path: '/page02',
      name: 'page02',
      component: page02
    }
  ]
})
