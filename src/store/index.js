import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarDraw: true
  },
  mutations: {
    setSidebarDraw (state, newOne) {
      state.sidebarDraw = newOne
    }
  },
  actions: {},
  modules: {}
})
