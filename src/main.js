import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

Vue.use(Mint)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('openIndexPage')
  if (auth) {
    if (to.path === '/tree' || to.path === '/my') {
      next()
    } else {
      next('/tree')
    }
  } else {
    if (to.path === '/welcome' || to.path === '/login' || to.path === '/reg') {
      next()
    } else {
      next('/welcome')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
