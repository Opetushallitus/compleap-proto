const upload = (formData) => {
  const cv = formData.getAll('pdf')
  const promise = getPDF(cv[0]).then(pdf => ({
    fileName: cv[0].name,
    url: pdf
  }))
  return Promise.resolve(promise)
}

const getPDF = (file) => {
  return new Promise((resolve, reject) => {
    const fReader = new FileReader()
    fReader.onload = () => {
      setTimeout(() => {
        resolve(fReader.result)
        // Randomize an API response delay
      }, (Math.random() * (2300 - 100) + 1000))
    }
    fReader.readAsDataURL(file)
  })
}

export { upload }
