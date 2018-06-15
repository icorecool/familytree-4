import Vue from 'vue'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'

import store from './store/index'

Vue.use(Mint, Vuex)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const auth = localStorage.getItem('openIndexPage')
  if (to.matched.some(record => record.meta.LoginRequire)) {
    if (!auth) {
      next({
        path: '/welcome',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
