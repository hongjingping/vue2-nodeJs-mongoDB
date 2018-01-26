// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import {sum, minus} from './util.js'
import * as util from './util.js'

// console.log(`sum: ${sum(2, 4)}`)
console.log(`sum: ${util.sum(1, 3)}`)
// console.log(`minus: ${minus(2, 4)}`)
console.log(`minus: ${util.minus(1, 3)}`)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
