import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/global.scss'
import '@/plugins/element-ui'
import '@/plugins/meta'
import '@/plugins/imageCompare'
import '@/plugins/scrollTo'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
