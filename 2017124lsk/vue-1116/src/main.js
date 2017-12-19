// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入这个模块
import ElementUI from 'element-ui'
//导入模块css
import 'element-ui/lib/theme-chalk/index.css'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
//使用这个模块
Vue.use(ElementUI)
Vue.use(iview)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
