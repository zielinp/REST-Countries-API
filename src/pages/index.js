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

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(res => res.json())
      .then(res => {
        setCountries(res)
        console.log(res)
      })
  }, [])

  return (
    <Layout>
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
    </Layout>
  )
}
