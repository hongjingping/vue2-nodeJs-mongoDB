<template>
  <div>
    <div>这个是商品列表页面</div>
    <!-- <span>{{$routes.params.goodId}}</span> -->
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
