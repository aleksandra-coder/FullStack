import React, {useState} from 'react'
import Country from './Country'


const Button = ({ handleClick, text}) => (
    <button onClick={handleClick} >
        {text}
    </button>
)

const CountryList = ({ country }) => {

    const [ showCountry, setShowCountry] = useState(false);

    const handleCountryClick = () => {
        setShowCountry(!showCountry)
      }
    
    //   ex 2.13
    // if button is clicked, info about a selected country is displayed. else, just a list of countries plus a button
      if (showCountry) {
          return (
        <div>
            <ul>
                <Button handleClick={handleCountryClick} text='hide'></Button>
                {<Country country={country}></Country>}
                
            </ul>
        </div>
    )
      }
      else {
          return (
              <div>
                {country.name} 
                <Button handleClick={handleCountryClick} text='show'></Button>
              </div>
          )
      }
      
    
}

export default CountryList

