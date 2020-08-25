import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledDiv = styled.div`
  box-shadow: 10px 10px 37px -3px rgba(199, 199, 199, 1);
  border-radius: 0.5rem;
  height: 20rem;
  width: 16rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  animation: ${fadeInUp} 0.6s linear forwards;
  a {
    text-decoration: none;
    color: black;
  }
  :hover {
    transform: scale(0.95);
    box-shadow: 6px 6px 23px -3px rgba(199, 199, 199, 0.8);
  }
`

const FlagBox = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`

const TextBox = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 0.3s 0.4s linear forwards;
  padding-left: 1rem;
  p {
    font-size: 0.75rem;
    margin: 0;
    line-height: 1.25rem;
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
  p:first-of-type {
    margin: 0.75rem 0 0.75rem 0;
    font-weight: bold;
    font-size: 1rem;
  }
`

function CountryCard({ countryName, alpha3Code, population, region, capital }) {
  // const [result, setResult] = useState("")

  // useEffect(() => {
  //   fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setResult(res[0])
  //       // console.log(res[0].name)
  //     })
  // }, [countryName])

  return (
    <>
      <StyledDiv>
        <Link to={`/detail/${alpha3Code}`}>
          <FlagBox src={`https://restcountries.eu/data/${alpha3Code}.svg`} />
          <TextBox>
            <p>{countryName}</p>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </TextBox>
        </Link>
      </StyledDiv>
    </>
  )
}

export default CountryCard
