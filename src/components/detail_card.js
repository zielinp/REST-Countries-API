import React, { useEffect, useState } from "react"

import styled from "styled-components"
import { Link } from "gatsby"

const DetailCardContainer = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
  margin: 2rem;
`

const FlagBox = styled.img`
  width: 100%;
  justify-items: center;
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`
const TextContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); */
  grid-template-rows: 0.5fr auto 1fr;
`
const Title = styled.p`
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
`
const BorderCountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  p {
    font-size: 1rem;
    margin: 0;
    line-height: 1.5rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
  button {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    height: 1.5rem;
    min-width: 5rem;
    box-shadow: 0 0 10px 0 rgba(199, 199, 199, 1);
    background-color: white;
    border: none;
    border-radius: 5px;
    text-align: center;
    a {
      text-decoration: none;
      color: black;
    }
  }
`

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`
const TextBox = styled.div`
  margin: 0;
  width: 14rem;
  p {
    font-size: 1rem;
    margin: 0;
    line-height: 1.5rem;
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
`

function DetailCard({ countryName, alpha3Code }) {
  const [result, setResult] = useState("")

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(res => res.json())
      .then(res => {
        setResult(res[0])
        // console.log(res[0].name)
      })
  }, [countryName])

  return (
    <>
      <DetailCardContainer>
        <FlagBox src={`https://restcountries.eu/data/${alpha3Code}.svg`} />
        <TextContainer>
          <Title>{result.name}</Title>
          <InfoBox>
            <TextBox>
              <p>
                Native Name: <span>{result.nativeName}</span>
              </p>
              <p>
                Population: <span>{result.population}</span>
              </p>
              <p>
                Region: <span>{result.region}</span>
              </p>
              <p>
                Sub Region: <span>{result.subregion}</span>
              </p>
              <p>
                Capital: <span>{result.capital}</span>
              </p>
            </TextBox>
            <TextBox>
              <p>
                Top Level Domain: <span>{result.topLevelDomain}</span>
              </p>
              <p>
                Currencies:
                {result.currencies == null
                  ? "No curriences"
                  : result.currencies.map(currency => (
                      <span> {currency.name}</span>
                    ))}
              </p>
              <p>
                Languages:
                {result.languages == null
                  ? "No languages"
                  : result.languages.map(language => (
                      <span> {language.name}</span>
                    ))}
              </p>
            </TextBox>
          </InfoBox>
          <BorderCountriesContainer>
            <p> Border Countries: </p>
            {result.borders == null || result.borders.length == 0
              ? "No border countries"
              : result.borders.map(border => (
                  <button>
                    <Link to={`/detail/${border.toLowerCase()}`}>{border}</Link>
                  </button>
                ))}
          </BorderCountriesContainer>
        </TextContainer>
      </DetailCardContainer>
    </>
  )
}

export default DetailCard
