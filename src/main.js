import Vue from 'vue'
import App from './App.vue'
import '@/assets/style/global.scss'
import '@/plugins/element-ui'
import '@/plugins/meta'
import '@/plugins/imageCompare'
import '@/plugins/scrollTo'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartPie, faWater, faFish, faLightbulb, faSearch, faUsers, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChartPie, faWater, faFish, faLightbulb, faSearch, faUsers, faInfo)
// library.add(faWater)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
