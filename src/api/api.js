import personalData from './json/personal-data'
import users from './json/users'
import suggestions from './json/path-goal-suggestions'
import elements from './json/path-elements'

const fetchJson = (mockApiData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockApiData)
      // Randomize an API response delay
    }, (Math.random() * (1000 - 100) + 100))
  })
}

export default {
  getPersonalData (id) {
    return fetchJson(personalData[id])
  },
  getUsers () {
    return fetchJson(users)
  },
  getPathGoalSuggestions (userid) {
    return fetchJson(suggestions[userid])
  },
  getPathElements (userid, pathGoalId) {
    return fetchJson(elements[userid][pathGoalId])
  }
}
