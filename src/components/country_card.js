import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledDiv = styled.div`
  box-shadow: 10px 10px 37px -3px rgba(199, 199, 199, 1);
  border-radius: 0.5rem;
  height: 20rem;
  width: 16rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
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
  max-height: 12rem;
`

const TextBox = styled.div`
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
              Population:{" "}
              <span>
                {population
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              </span>
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
