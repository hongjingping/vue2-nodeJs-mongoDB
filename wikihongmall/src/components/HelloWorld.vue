<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Counter :num = "num" v-on:incre = "increase" v-on:decre = "decrement"></Counter>
    <p>parent:{{ num }}</p>
  </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 10,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Counter: Counter
  },
  methods: {
    increase () {
      this.num++
    },
    decrement () {
      this.num--
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
