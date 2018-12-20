import personalData from './json/personal-data.json'

const fetchJson = (mockApiData, delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockApiData)
      // Randomize an API response delay
    }, (Math.random() * (1300 - 100) + 100))
  })
}

export default {
  getPersonalData () {
    return fetchJson(personalData)
  }
}
