import Vue from 'vue'
import App from './App'
import clipboard from 'clipboard'

Vue.config.productionTip = false

Vue.prototype.clipboard = clipboard;

App.mpType = 'app'

const app = new Vue({
    ...App
})

app.$mount()
