import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const TextBox = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.6s 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
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
    transition: transform 0.3s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`

const StyledDiv = styled.div`
  box-shadow: 10px 10px 37px -3px var(--boxShadowColor);
  border-radius: 0.5rem;
  height: 20rem;
  width: 16rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  animation: ${fadeIn} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  overflow: hidden;
  a {
    text-decoration: none;
    color: black;
  }
  :hover {
    transform: scale(0.95);
    box-shadow: 6px 6px 23px -3px var(--boxShadowColor);
    ${TextBox} {
      p:first-of-type {
        transform: translateX(5px);
      }
    }
  }
`

const FlagBox = styled.img`
  opacity: 0;
  animation: ${fadeIn} 0.6s 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  width: 100%;
  border-radius: 0.5rem;
  height: 11rem;
  max-height: 11rem;
  object-fit: cover;
`

function CountryCard({ countryName, alpha3Code, population, region, capital }) {
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
