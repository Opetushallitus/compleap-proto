import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    personalData: {}
  },
  mutations: {
    setPersonalData (state, data) {
      state.personalData = data
    }
  },
  actions: {
    getPersonalData ({ commit }) {
      return api
        .getPersonalData()
        .then(data => commit('setPersonalData', data))
    }
  }
})
