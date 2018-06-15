import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  detailsArry: []
}

// const mutations = {
//   add (state) {
//     state.count += 1
//     console.log(state.count, state.detailsArry)
//   },
//   reduce (state) {
//     state.count -= 1
//     console.log(state.count)
//   }
// }

export default new Vuex.Store({
  state
//   mutations
})
