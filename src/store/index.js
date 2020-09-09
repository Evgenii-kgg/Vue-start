import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    numbers: [1, 20, 34, 47, 5, 6, 75, 81]
  },
  getters: {
    sortedNumber: (state) => state.numbers.sort((a, b) => a - b)
  },
  mutations: {
    increment (state) {
      state.count = state.count + 1
    }
  },
  actions: {
  },
  modules: {
  }
})
