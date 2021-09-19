import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Country></Country>
    </div>
  );
}

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(resp => resp.json())
      .then(data => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>

    </div>
  );
}

export default App;
