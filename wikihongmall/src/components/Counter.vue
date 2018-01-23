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
      let _this = this
      _this.myNum++
    },
    decrement (myNum) {
      this.myNum--
    }
  }
}
</script>

<style>

</style>
