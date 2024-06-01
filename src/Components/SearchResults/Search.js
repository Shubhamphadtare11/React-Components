import React, { useState } from 'react';

function Search({ filterCountries }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterCountries(value);
  };

  return (
    <input
      data-testid="filterInput"
      className="large"
      placeholder="Enter Country Name"
      value={searchTerm}
      onChange={handleChange}
    />
  );
}

export default Search;