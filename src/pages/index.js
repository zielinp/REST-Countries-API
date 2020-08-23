import React, { useEffect, useState } from "react"
import CountryCard from "../components/country_card"
import Header from "../components/header"
import SearchPanel from "../components/search_panel"
import Select from "../components/select"

import styled, { createGlobalStyle } from "styled-components"

import { Link } from "gatsby"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');
body{
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
}
*{
  box-sizing: border-box;
}
`

const StyledContainer = styled.div`
  /* display: grid;
align-items: center;
grid-template-columns: repeat(4,1fr); */
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

const countries = [
  {
    name: "Poland",
    population: 50,
  },
  {
    name: "Germany",
    population: 52,
  },
  {
    name: "China",
    population: 53,
  },
]

export default function Home() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(res => {
        setCountries(res)
        console.log(res)
      })
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header />

      <StyledSearchSection>
        <SearchPanel></SearchPanel>
        <Select></Select>
      </StyledSearchSection>

      <StyledContainer>
        {countries.map(country => (
          <CountryCard
            countryName={country.name}
            alpha3Code={country.alpha3Code.toLowerCase()}
          />
        ))}
      </StyledContainer>
    </>
  )
}
