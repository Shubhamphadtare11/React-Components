import React from 'react';

function CountryList({ filteredCountries }) {
  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        {filteredCountries.map((country, index) => (
          <li key={index} className="pa-10">{country}</li>
        ))}
      </ul>
    </section>
  );
}

export default CountryList;
