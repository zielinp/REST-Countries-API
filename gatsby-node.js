const fetch = require("node-fetch")
const getJSON = uri => fetch(uri).then(response => response.json())

exports.createPages = async ({ actions: { createPage } }) => {
  const [countryData] = await Promise.all([
    getJSON("https://restcountries.eu/rest/v2/all"),
  ])
  countryData.forEach(country => {
    createPage({
      path: `/detail/${country.alpha3Code.toLowerCase()}`,
      component: require.resolve("./src/components/detail.js"),
      context: { country },
    })
  })
}
