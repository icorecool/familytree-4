import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

import Tree from '@/components/Content/tree'
import My from '@/components/Content/my'

import Welcome from '@/components/User/welcome'
import Login from '@/components/User/Login/login'
import Reg from '@/components/User/Login/reg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: HomePage,
      children: [
        {
          path: '/',
          component: Tree,
          meta: {
            title: '家谱'
          }
        }, {
          path: '/tree',
          component: Tree,
          meta: {
            title: '树谱'
          }
        }, {
          path: '/my',
          component: My,
          meta: {
            title: '个人中心'
          }
        }
      ]
    }, {
      path: '/login',
      component: Login,
      meta: {
        title: '登陆'
      }
    }, {
      path: '/reg',
      component: Reg,
      meta: {
        title: '用户注册'
      }
    }, {
      path: '/welcome',
      component: Welcome
    }
  ]
})
