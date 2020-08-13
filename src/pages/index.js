import React from "react"
import CountryCard from "../components/country_card"
import Header from "../components/header"
import SearchPanel from "../components/search_panel"
import Select from "../components/select"

import styled, { createGlobalStyle } from "styled-components"

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

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <StyledSearchSection>
        <SearchPanel></SearchPanel>
        <Select></Select>
      </StyledSearchSection>

      <StyledContainer>
        <CountryCard
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName="Germany"
          countryPopulation="123.456.789"
          countryRegion="Europe"
          countryCapital="Berlin"
        />

        <CountryCard
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName="Germany"
          countryPopulation="123.456.789"
          countryRegion="Europe"
          countryCapital="Berlin"
        />
        <CountryCard
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName="Germany"
          countryPopulation="123.456.789"
          countryRegion="Europe"
          countryCapital="Berlin"
        />
        <CountryCard
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName="Germany"
          countryPopulation="123.456.789"
          countryRegion="Europe"
          countryCapital="Berlin"
        />
        <CountryCard
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName="Germany"
          countryPopulation="123.456.789"
          countryRegion="Europe"
          countryCapital="Berlin"
        />

        <CountryCard
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName="Germany"
          countryPopulation="123.456.789"
          countryRegion="Europe"
          countryCapital="Berlin"
        />
        <CountryCard
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName="Germany"
          countryPopulation="123.456.789"
          countryRegion="Europe"
          countryCapital="Berlin"
        />
        <CountryCard
          flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName="Germany"
          countryPopulation="123.456.789"
          countryRegion="Europe"
          countryCapital="Berlin"
        />
      </StyledContainer>
    </>
  )
}
