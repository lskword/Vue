import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/Goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Goods' }
    },
    {
      path: '/:id',
      name: 'Goods',
      component: Goods
    }
  ]
})
