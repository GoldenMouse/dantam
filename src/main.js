import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import "bulma/bulma.sass";
import VueAgile from 'vue-agile'
import '@/scss/mediaquery.scss'

import Social from './components/Social.vue'

Vue.component('social', Social)
Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
