import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fuse from 'fuse.js'

Vue.config.productionTip = false

Vue.prototype.$search = function (term, list, options) {
  return new Promise(function (resolve) {
    var run = new Fuse(list, options)
    var results = run.search(term)
    resolve(results)
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
