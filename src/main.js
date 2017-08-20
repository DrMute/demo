import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
