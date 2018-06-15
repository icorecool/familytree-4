import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  access_token: localStorage.getItem('access_token'),
  foldersArry: '',
  detailsArry: []
}

// const mutations = {
//   getToken (state, data) {
//     state.access_token = data
//   }
// }

export default new Vuex.Store({
  state
//   mutations
})
