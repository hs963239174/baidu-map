import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import BaiduMap from '@/components/BaiduMap'

Vue.use(Router)
Vue.use(VueResource)

const myRouter = new Router({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: '/home',
      name: 'BaiduMap',
      component : BaiduMap
    }
  ]
})

export default myRouter

