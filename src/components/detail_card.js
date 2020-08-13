import React from "react"

import styled from "styled-components"

const DetailCardContainer = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
  margin: 2rem;
`

const FlagBox = styled.div`
  background-image: url(${({ flagUrl }) => flagUrl});
  background-size: contain;
  background-repeat: no-repeat;
  height: 18rem;
  justify-items: center;
  @media only screen and (max-width: 768px) {
    height: 15rem;
     }
`
const TextContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); */
  grid-template-rows: 0.5fr auto 1fr;
`
const Title = styled.p`
  margin: 0;
  margin-top:1rem;
  margin-bottom:1rem;
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
  }
`

const InfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`
const TextBox= styled.div`
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

const DetailCard = props => (
  <>
    <DetailCardContainer>
      <FlagBox flagUrl={props.flagUrl}></FlagBox>
      <TextContainer>
        <Title>{props.countryName}</Title>
        <InfoBox>
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

        </InfoBox>
        <BorderCountriesContainer>
          <p> Border Countries: </p>
          <button>Poland</button>
          <button>France</button>
          <button>Austria</button>
          <button>Belgium</button>
        </BorderCountriesContainer>
      </TextContainer>
    </DetailCardContainer>
  </>
)

export default DetailCard
