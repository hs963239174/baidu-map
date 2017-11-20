import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import DefaultPage from '@/components/DefaultPage'
import TypeSelector from '@/components/TypeSelector'

Vue.use(Router)
Vue.use(VueResource)

const myRouter = new Router({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: '/default',
      name: 'DefaultPage',
      component: DefaultPage
    },
    {
      path: '/home',
      name: 'TypeSelector',
      component : TypeSelector
    }
  ]
})

export default myRouter

