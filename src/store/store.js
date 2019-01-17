import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'
import createPersistedState from 'vuex-persistedstate'
import competenceGroups from '../api/json/competence-groups.json'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    personalData: {},
    userList: [],
    competenceGroups: competenceGroups.competenceGroups
  },
  mutations: {
    setPersonalData (state, data) {
      state.personalData = data
    },
    setUserList (state, data) {
      state.userList = data
    }
  },
  actions: {
    getPersonalData ({ commit }, id) {
      return api
        .getPersonalData(id)
        .then(data => commit('setPersonalData', data))
    },
    getUsers ({ commit }) {
      return api
        .getUsers()
        .then(data => commit('setUserList', data.users))
    }
  }
})
