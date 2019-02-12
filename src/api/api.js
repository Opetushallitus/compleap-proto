import personalData from './json/personal-data'
import users from './json/users'
import suggestions from './json/path-goal-suggestions'
import elements from './json/path-elements'
import educationsSuggestBasedOnCompetences from './json/educations-suggestions-basedon-compentences'
import educationsSuggestBasedOnEducation from './json/educations-suggestions-basedon-education'
import educationsSuggestBasedOnWork from './json/educations-suggestions-basedon-work'
import jobSuggestions from './json/job-suggestions'

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
  },
  getEducationsSuggestionsCompetences (userid) {
    return fetchJson(educationsSuggestBasedOnCompetences[userid])
  },
  getEducationsSuggestionsEducation (userid) {
    return fetchJson(educationsSuggestBasedOnEducation[userid])
  },
  getEducationsSuggestionsWork (userid) {
    return fetchJson(educationsSuggestBasedOnWork[userid])
  },
  getJobSuggestions (userid) {
    return fetchJson(jobSuggestions[userid])
  }
}
