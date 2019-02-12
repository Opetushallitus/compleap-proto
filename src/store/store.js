import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api/api'
import createPersistedState from 'vuex-persistedstate'
import competenceGroups from '../api/json/competence-groups.json'
import { defaultElements } from '../api/json/path-elements'

Vue.use(Vuex)

let store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    personalData: {},
    userList: [],
    competenceGroups: competenceGroups.competenceGroups,
    educationPath: {},
    pathGoalSuggestions: [],
    pathElements: defaultElements,
    pathGoalId: '',
    likedEducations: [],
    likedJobs: [],
    educationsSuggestions_competences: [],
    educationsSuggestions_education: [],
    educationsSuggestions_work: [],
    jobSuggestions: []
  },
  getters: {
    pathGoalId: state => {
      return state.pathGoalId
    }
  },
  mutations: {
    setPersonalData (state, data) {
      state.personalData = data
    },
    setUserList (state, data) {
      state.userList = data
    },
    setPathGoalSuggestions (state, data) {
      state.pathGoalSuggestions = data
    },
    setPathElements (state, data) {
      if (data === undefined) {
        console.log('setPathElements data was not defined. Using default elements')
        data = defaultElements
      }
      state.pathElements = data
    },
    setPathGoal (state, data) {
      state.pathGoalId = data
    },
    setEducationsSuggestions_competences (state, data) {
      state.educationsSuggestions_competences = data
    },
    setEducationsSuggestions_education (state, data) {
      state.educationsSuggestions_education = data
    },
    setEducationsSuggestions_work (state, data) {
      state.educationsSuggestions_work = data
    },
    setJobSuggestions (state, data) {
      state.jobSuggestions = data
    }
  },
  actions: {
    getPersonalData ({ commit }, id) {
      return api.getPersonalData(id).then(data => commit('setPersonalData', data))
    },
    setPersonalData ({ commit }, data) {
      return commit('setPersonalData', data)
    },
    getUsers ({ commit }) {
      return api.getUsers().then(data => commit('setUserList', data.users))
    },
    getPathGoalSuggestions ({ commit }, userid) {
      return api.getPathGoalSuggestions(userid).then(data => commit('setPathGoalSuggestions', data.suggestions))
    },
    getPathElements ({ commit }, pathGoalId) {
      console.log('getPathElements', this.state.personalData.basicInfo.id, pathGoalId)
      return api.getPathElements(this.state.personalData.basicInfo.id, pathGoalId).then(data => commit('setPathElements', data))
    },
    savePathGoal ({ commit }, id) {
      console.log('savePathGoal', id)
      return commit('setPathGoal', id)
    },
    getEducationsSuggestions_competences ({ commit }, userid) {
      return api.getEducationsSuggestionsCompetences(userid).then(data => commit('setEducationsSuggestions_competences', data.suggestions))
    },
    getEducationsSuggestions_education ({ commit }, userid) {
      return api.getEducationsSuggestionsEducation(userid).then(data => commit('setEducationsSuggestions_education', data.suggestions))
    },
    getEducationsSuggestions_work ({ commit }, userid) {
      return api.getEducationsSuggestionsWork(userid).then(data => commit('setEducationsSuggestions_work', data.suggestions))
    },
    getJobSuggestions ({ commit }, userid) {
      return api.getJobSuggestions(userid).then(data => commit('setJobSuggestions', data.suggestions))
    }
  }
})

store.watch(() => store.getters['pathGoalId'],
  (newVal, oldVal) => {
    store.dispatch('getPathElements', newVal)
  }
)
export default store
