import React from "react"
import DetailCard from "./detail_card"
import Layout from "./layout"
import styled from "styled-components"
import { Link } from "gatsby"

const BackButton = styled.button`
  height: 2rem;
  width: 6rem;
  box-shadow: 0 0 10px 0 var(--boxShadowColor);
  background-color: white;
  margin: 2rem 2rem 0 2rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  :hover {
    cursor: pointer;
    transform: scale(0.95);
    /* box-shadow: 6px 6px 23px -3px rgba(199, 199, 199, 0.8); */
  }
`

export default function Detail({ pageContext }) {
  const { country } = pageContext
  return (
    <Layout>
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
    </Layout>
  )
}
