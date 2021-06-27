import Vue from 'vue'
import App from './App.vue'

import "./plugins/cloudinary";

import './main.css'

import VueFinalModal from 'vue-final-modal'

Vue.use(VueFinalModal())


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
