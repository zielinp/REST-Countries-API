import React from "react"
import Header from "../components/header"
import DetailCard from "../components/detail_card"

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

const BackButton = styled.button`
  height: 2rem;
  width: 6rem;
  box-shadow: 0 0 10px 0 rgba(199, 199, 199, 1);
  background-color: white;
  margin: 2rem 2rem 0 2rem;
  border: none;
  border-radius: 5px;
  text-align: center;
`

export default function Detail() {
    return(
  <>
    <GlobalStyle />
    <Header />
    <BackButton>Back</BackButton>
    <DetailCard
      countryName="Germany"
      flagUrl="https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
      countryNativeName="Deutchland"
      countryPopulation="123.456.789"
      countryRegion="Europe"
      countrySubRegion="Europe"
      countryCapital="Berlin"
      countryTopLevelDomain = ".de"
      countryCurrencies = "Euro"
      countryLanguages = "German"
    />
  </>
    )
}

