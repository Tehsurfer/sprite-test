/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import {SvgSprite, SvgIcon} from '@abi-software/svg-sprite'

Vue.component('svg-icon', SvgIcon)
Vue.component('svg-sprite', SvgSprite)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
