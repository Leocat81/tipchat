// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from './utils/request'
import { Lazyload } from 'vant'
Vue.use(Lazyload)
Vue.config.productionTip = false
// main.js
// 初始化插件, 把createRootClass方法挂到Vue上
/* eslint-disable no-new */
Vue.prototype.$post = request.post
Vue.prototype.$get = request.get
Vue.directive('myclick', {
  // 当被绑定的元素插入到 DOM 中时……
  bind: function (el, binding) {
    el.binding = binding
    el.addEventListener('click', () => {
      let binding = el.binding
      console.log(binding.value)
    })
    // 聚焦元素
  },
  update: function (el, binding) {
    el.binding = binding
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
