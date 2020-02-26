import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import './common/scss/index.scss'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
