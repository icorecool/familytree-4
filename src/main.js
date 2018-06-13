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
    next()
  } else {
    if (to.path === '/welcome' || to.path === '/login' || to.path === '/reg') {
      next()
    } else {
      next('/welcome')
    }
  }

//  if (!auth && /^(login|reg|welcome)&/to.name) {
//     next({ path: '/welcome', replace: true })
//  } else { next() }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
