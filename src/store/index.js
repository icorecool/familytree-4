import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

const state = {
  access_token: null,
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
    Cookie.set('access_token', key, { expires: 7 })
  },
  getDetailsArry (state, data) {
    state.detailsArry = data
    Cookie.set('detailsArry', data)
  },
  outLogin () {
    Cookie.remove('access_token')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
