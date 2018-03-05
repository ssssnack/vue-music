import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
