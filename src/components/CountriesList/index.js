import countriesData from '../../countries.json';
import { Link } from "react-router-dom"; 

export function CountriesList() {

  return (
    <ul className="list-group" style={{height: 700, overflow: "scroll", marginTop: 10, marginBotton: 10, marginLeft: 250, width: 500, display: "flex", flexDirection: "column"}}>
        {countriesData.map(country => {
            return (
            <li key={country.alpha3Code} className="list-group" style={{flexDirection: "column"}}>
                  <Link className="list-group-item" to={`/${country.alpha3Code}`}> 
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common}`}/>
                    <p style={{fontSize: 18}} >{country.name.common}</p>
                  </Link>
            </li>
            );
        })}
    </ul>
  );
}                                                                         