import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'vue-moment'
import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.use(moment)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
