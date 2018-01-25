<template>
  <div>
    <button @click="increase">+</button>
    <button @click="decrement">-</button>
    <p><span>{{ myNum }}</span></p>
  </div>
</template>

<script>
export default {
  props: ['num'],
  data () {
    return {
      myNum: this.num
    }
  },
  methods: {
    increase (myNum) {
      // 子组件传父组件
      this.$emit('incre');
      // 异步请求js文件
      import('./../util.js');
    },
    decrement (myNum) {
      this.$emit('decre')
    }
  }
}
</script>

<style>

</style>
