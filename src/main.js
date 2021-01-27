import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import { BootstrapVue, LayoutPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)

//ważne do użycia
//  https://popper.js.org/
//  https://portal-vue.linusb.org/
//  https://bootstrap-vue.org/docs
