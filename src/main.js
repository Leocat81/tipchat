// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './utils/request'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.$post = request.post
Vue.prototype.$get = request.get
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
