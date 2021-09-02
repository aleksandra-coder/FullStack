import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountryList from './components/CountryList'
// import Weather from './components/Weather'

// ex 2.12
// how many countries are matching the queries, if over 10, less than 10, exactly 1
const SearchedCountries = ({selectedCountry, countries}) => {
  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(selectedCountry.toLowerCase()))
  
  if (filteredCountries.length > 10) {
    return (
      'Too many matches, specify another filter'
    )
  }
  if (filteredCountries.length > 1 ) {
    return (
      // displaying list of the countries that match criteria
    filteredCountries.map(selectedCountry => <CountryList key={selectedCountry.name} country={selectedCountry}></CountryList>) 
    )
  }
  if (filteredCountries.length === 1) {
    const oneCountry = filteredCountries[0]
    return (
      <Country country={oneCountry}></Country>
    )
  } else {
    return null
  }

}

const App = () => {

  const [countries, setCountries ] = useState ([])
  const [ selectedCountry, setSelected ] = useState('')

  // ex 2.12
  // fetch countries API
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  
const handleSelectedChange = (event) => {
  console.log(event.target.value)
    setSelected(event.target.value)
}


return (
  <div>
    
      find countries <input value={selectedCountry} onChange={handleSelectedChange} ></input>
    <div>
      <SearchedCountries selectedCountry={selectedCountry} countries={countries}></SearchedCountries>

    </div>
    
  </div>
)

}

export default App
