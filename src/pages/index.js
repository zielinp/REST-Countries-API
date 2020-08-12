import React from "react"
import CountryCard from "./country_card"


export default function Home() {
  return( <div>
          <CountryCard 
          flagUrl = "https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png"
          countryName = 'Germany'
          countryPopulation = '123.456.789'
          countryRegion = 'Europe'
          countryCapital = 'Berlin' />
          </div>)

}
