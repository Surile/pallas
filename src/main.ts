/*
 * @Author: 夜雨
 * @Date: 2021-03-04 18:30:29
 * @Description: Do not edit
 */
import Vue from 'vue'
import App from './App.vue'
import clipboard from 'clipboard'

Vue.config.productionTip = false

Vue.prototype.clipboard = clipboard

new App().$mount()
