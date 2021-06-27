import Vue from 'vue'
import App from './App.vue'

import "./plugins/cloudinary";

import './main.css'

/* include animation styles */
import "vodal/common.css";
import "vodal/rotate.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
