import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import CountryCard from "../components/country_card"
import SearchPanel from "../components/search_panel"
import Select from "../components/select"
import styled from "styled-components"

const StyledContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const StyledSearchSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`

export default function Home() {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchedCountries, setSearechedCountries] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(res => {
        setCountries(res)
        console.log(res)
      })
  }, [])

  function handleSelectChange(event) {
    let regionPath =
      event.target.value == ""
        ? `https://restcountries.eu/rest/v2/all`
        : `https://restcountries.eu/rest/v2/region/${event.target.value}`

    fetch(regionPath)
      .then(res => res.json())
      .then(res => {
        setCountries(res)
        console.log(res)
      })
  }

  function handleSearchChange(event) {
    let name = event.target.value
    let nameCapitalized =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    setSearechedCountries(
      countries.filter(country => country.name.startsWith(nameCapitalized))
    )
    setSearchTerm(event.target.value)
    //console.log(event.target.value)
  }

  return (
    <Layout>
      <StyledSearchSection>
        <SearchPanel onChange={handleSearchChange}></SearchPanel>
        <Select onChange={handleSelectChange}></Select>
      </StyledSearchSection>

      <StyledContainer>
        {searchTerm
          ? searchedCountries.length > 0
            ? searchedCountries.map(country => (
                <CountryCard
                  countryName={country.name}
                  alpha3Code={country.alpha3Code.toLowerCase()}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              ))
            : "Sorry, invalid country name or not in this region!"
          : countries.map(country => (
              <CountryCard
                countryName={country.name}
                alpha3Code={country.alpha3Code.toLowerCase()}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))}
      </StyledContainer>
    </Layout>
  )
}
