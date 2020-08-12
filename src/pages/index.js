import React from "react"
import CountryCard from "../components/country_card"
import styled from "styled-components"

const StyledContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`


export default function Home() {
  return (
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

    
  )
}
