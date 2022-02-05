import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Link } from "react-router-dom";

import { Navbar } from "./components/Navbar/index"
import { CountriesList } from "./components/CountriesList/index";
import { CountryDetails } from "./components/CountryDetails/index";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
      <section className="countries">
        <CountriesList />
        <Routes>
          <Route path="/:countryAbrev" element={ <CountryDetails /> } />
        </Routes>
      </section>   
    
    </BrowserRouter>

    </div>
  );
}

export default App;
