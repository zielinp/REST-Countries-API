import React, { useEffect, useState } from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  box-shadow: 10px 10px 37px -3px rgba(199, 199, 199, 1);
  border-radius: 0.5rem;
  height: 20rem;
  width: 16rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
`

const FlagBox = styled.img`
  width: 100%;
  border-radius: 0.5rem;
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
// const CountryCard = props => (
//   <>
//     <StyledDiv>
//       <FlagBox flagUrl={props.flagUrl}></FlagBox>
//       <TextBox>
//         <p>{props.countryName}</p>
//         <p>Population: <span>{props.countryPopulation}</span></p>
//         <p>Region: <span>{props.countryRegion}</span></p>
//         <p>Capital: <span>{props.countryCapital}</span></p>
//       </TextBox>
//     </StyledDiv>
//   </>
// )

function CountryCard({ countryName, alpha3Code }) {
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
      <StyledDiv>
        <FlagBox src={`https://restcountries.eu/data/${alpha3Code}.svg`} />
        <TextBox>
          <p>{result.name}</p>
          <p>
            Population: <span>{result.population}</span>
          </p>
          <p>
            Region: <span>{result.region}</span>
          </p>
          <p>
            Capital: <span>{result.capital}</span>
          </p>
        </TextBox>
      </StyledDiv>
    </>
  )
}

export default CountryCard
