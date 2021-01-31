import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, LayoutPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
<<<<<<< Updated upstream
=======
import VueScrollTo from 'vue-scrollto'
>>>>>>> Stashed changes
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
<<<<<<< Updated upstream
=======
Vue.use(VueScrollTo, {
  container: ".middle",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
>>>>>>> Stashed changes

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

//ważne do użycia
//  https://popper.js.org/
//  https://bootstrap-vue.org/docs