import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
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
