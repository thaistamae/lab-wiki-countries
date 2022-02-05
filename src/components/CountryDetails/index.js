import { useParams } from "react-router-dom";
import countriesData from '../../countries.json';

export function CountryDetails() {
  const {countryAbrev} = useParams();

    const newArray = countriesData.filter((country) => {
      return ((country.alpha3Code) === `${countryAbrev}`)
    })
  
  console.log(newArray)

  return (
    <div style={{height: 700, marginTop: 10, marginBotton: 10, marginLeft: 250, width: 500, display: "flex", flexDirection: "column", alignItems: "flex-start",}}>
        
        {newArray.map((country) => {
          return (
          <section key={country.alpha3Code}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common}`}/>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km²</p>
          </section>
      )})}
    
    </div>
  );
}