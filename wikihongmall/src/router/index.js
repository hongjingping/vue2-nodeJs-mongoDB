import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/goodsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods/:goosId/user/:userName',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
