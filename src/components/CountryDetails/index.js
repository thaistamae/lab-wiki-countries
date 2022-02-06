import { useParams } from "react-router-dom";
import countriesData from '../../countries.json';

export function CountryDetails() {
  const {countryAbrev} = useParams();

  const newArray = countriesData.filter((country) => {
    return ((country.alpha3Code) === `${countryAbrev}`)
  })
  
  const borders = newArray[0].borders  
  console.log(borders)

  function exportBorders(){
    const bordersList = [];
    for (let i = 0; i < borders.length; i++){
      bordersList.push(<p key={borders[i]}><a href="/#">{borders[i]}</a></p>)
    }
    return bordersList
    
  }

  console.log(exportBorders())
  
  return (
    <div style={{height: 700, width: 1000, marginTop: 10, marginBotton: 10, marginLeft: 20, display: "flex", flexDirection: "column",}}>
        
        {newArray.map((country) => {
          return (
          <section key={country.alpha3Code} style={{height: 700, width: 800}}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common}`}/>
            <h1>{country.name.common}</h1>
            <hr></hr>
            <article style={{display: "flex", justifyContent: "space-around", }}>
              <p>Capital: </p>
              <p>{country.capital}</p>
            </article>
            <hr></hr>
            <article style={{display: "flex", justifyContent: "space-around", }}>
              <p>Area: </p>
              <p>{country.area} km²</p>
            </article>
            <hr></hr>
            <article style={{display: "flex", justifyContent: "space-around", }}>
              <p>Borders: </p>
              <ul>{exportBorders()}</ul>
            </article>
          </section>
      )})}
    
    </div>
  );
}