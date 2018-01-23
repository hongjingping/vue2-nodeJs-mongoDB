<template>
  <div>
    <div>这个是商品列表页面</div>
    <!-- <span>{{$routes.params.goodId}}</span> -->
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
    <router-link to="/cart">跳转到购物车页面</router-link>
    <button @click="jump">button-跳转到购物车页面</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    jump () {
      // this.$router.push('/cart') // 跳转
      // this.$router.push({path: '/cart?goodsId=123'}) // 跳转
      this.$router.go(-2) // 后退两步
    }
  }
}
</script>

<style>

</style>
