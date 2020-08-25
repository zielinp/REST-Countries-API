import React from "react"
import Header from "./header"
import DetailCard from "./detail_card"

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

const BackButton = styled.button`
  height: 2rem;
  width: 6rem;
  box-shadow: 0 0 10px 0 rgba(199, 199, 199, 1);
  background-color: white;
  margin: 2rem 2rem 0 2rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  :hover {
    cursor: pointer;
  }
`

export default function Detail({ pageContext }) {
  const { country } = pageContext
  return (
    <>
      <GlobalStyle />
      <Header />
      <Link to="/">
        <BackButton>Back</BackButton>
      </Link>
      <DetailCard
        countryName={country.name}
        alpha3Code={country.alpha3Code.toLowerCase()}
        nativeName={country.nativeName}
        population={country.population}
        region={country.region}
        subregion={country.subregion}
        capital={country.capital}
        topLevelDomain={country.topLevelDomain}
        currencies={country.currencies}
        languages={country.languages}
        borders={country.borders}
      />
    </>
  )
}
