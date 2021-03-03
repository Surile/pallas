import Vue from 'vue'
import App from './App.vue'
import clipboard from 'clipboard'

Vue.config.productionTip = false

Vue.prototype.clipboard = clipboard

new App().$mount()
