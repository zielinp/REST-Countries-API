import React from "react"

import styled from "styled-components"

const DetailViewContainer = styled.div`
  display: flex;
  /* width: 50rem;
  height: 20rem; */
  border: 1px solid black;
  flex-wrap: wrap;
  justify-content: space-around;
`
const FlagBox = styled.div`
  background-image: url(${({ flagUrl }) => flagUrl});
  background-size: contain;
  background-repeat: no-repeat;
  height: 18rem;
  width: 20rem;
  border: 1px solid black;
  margin: 1rem;
`

const TextContainer = styled.div`
  margin: 1rem;
  padding: 1rem;

  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TextBox = styled.div`
  margin: 0;
  width: 14rem;
  border: 1px solid black;
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

const InnerTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.p`
  width: 30rem;
  margin: 1rem 0 1rem 0;
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
    height: 1.5rem;
    width: 5rem;
    box-shadow: 0 0 10px 0 var(--boxShadowColor);
    background-color: white;
    border: none;
    border-radius: 5px;
    text-align: center;
  }
`

const DetailCard = props => (
  <>
    <DetailViewContainer>
      <FlagBox flagUrl={props.flagUrl}></FlagBox>
      <TextContainer>
        <Title>{props.countryName}</Title>
        <InnerTextContainer>
          <TextBox>
            <p>
              Native Name: <span>{props.countryNativeName}</span>
            </p>
            <p>
              Population: <span>{props.countryPopulation}</span>
            </p>
            <p>
              Region: <span>{props.countryRegion}</span>
            </p>
            <p>
              Sub Region: <span>{props.countrySubRegion}</span>
            </p>
            <p>
              Capital: <span>{props.countryCapital}</span>
            </p>
          </TextBox>
          <TextBox>
            <p>
              Top Level Domain: <span>{props.countryTopLevelDomain}</span>
            </p>
            <p>
              Currencies: <span>{props.countryCurrencies}</span>
            </p>
            <p>
              Languages: <span>{props.countryLanguages}</span>
            </p>
          </TextBox>
        </InnerTextContainer>
        <BorderCountriesContainer>
          <p> Border Countries: </p>
          <button>Poland</button>
          <button>France</button>
          <button>Austria</button>
          <button>Belgium</button>
        </BorderCountriesContainer>
      </TextContainer>
    </DetailViewContainer>
  </>
)

export default DetailCard
