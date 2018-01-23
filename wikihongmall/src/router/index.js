import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/goodsList.vue'
import Title from '@/views/title.vue'
import Image from '@/views/image.vue'
import Cart from '@/views/cart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      components: {
        defaule: GoodsList,
        title: Title,
        image: Image
      }
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart
    }
  ]
})
