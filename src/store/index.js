import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

const state = {
  access_token: null,
  loginTxt: '登陆',
  foldersArry: '',
  detailsArry: ''
}

const getters = {
  getToken (state) {
    if (!state.access_token) {
      state.access_token = Cookie.get('access_token')
    }
    return state.access_token
  },
  getFoldersArry (state) {
    if (!state.foldersArry) {
      state.foldersArry = Cookie.getJSON('foldersArry')
    }
    return state.foldersArry
  },
  getDetailsArry (state) {
    if (!state.detailsArry) {
      state.detailsArry = Cookie.getJSON('detailsArry')
    }
    return state.detailsArry
  }
}

const mutations = {
  getToken (state, key) {
    state.access_token = key
    state.loginTxt = '回到首页'
    Cookie.set('access_token', key, { expires: 7 })
  },
  getFoldersArry (state, data) {
    state.foldersArry = data
    Cookie.set('foldersArry', data)
  },
  getDetailsArry (state, data) {
    state.detailsArry = data
    Cookie.set('detailsArry', data)
  },
  outLogin (state) {
    state.access_token = null
    state.loginTxt = '登陆'
    Cookie.remove('access_token')
    Cookie.remove('foldersArry')
    Cookie.remove('detailsArry')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
