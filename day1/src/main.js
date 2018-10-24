import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

Vue.config.productionTip = false
Vue.prototype.$apiURL = 'https://blog.skooldio.com/'

new Vue({
  render: h => h(App)
}).$mount('#app')
