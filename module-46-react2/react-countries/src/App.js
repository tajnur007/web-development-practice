import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(resp => resp.json())
      .then(data => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h1>Country Name: {props.name}</h1>
      <h4>Capital: {props.capital}</h4>
    </div>
  );
}

export default App;
