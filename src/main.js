import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as directives from './directive'//自定义指令
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))// 注册指令

import Toast from '@/components/toast/index.js'
Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
