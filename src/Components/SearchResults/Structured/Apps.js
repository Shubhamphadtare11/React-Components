import React, {useState} from 'react';
// import './App.css';
import CountryList from './CountryList';
import Search from './Search';
import {response} from './response';
import 'h8k-components';
import "./style.css"


const title = "Country Filter";
function Apps() {
  const [filteredCountries, setFilteredCountries] = useState(response);

  const filterCountries = (searchTerm) => {
    const filtered = response.filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="Apps">
      <h8k-navbar header={title}></h8k-navbar>
      <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
        <Search filterCountries={filterCountries} />
        <CountryList filteredCountries={filteredCountries} />
      </section>
    </div>
  );
}

export default Apps;
