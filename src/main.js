// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'   //引入路由配置
import  './element'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router:router,     //等价于router:router,路由设置成功
  components: { App },
  template: '<App/>'
})
