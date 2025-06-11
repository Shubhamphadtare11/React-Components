import React, { useState, useEffect } from "react";

const SearchDebounce = () => {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda",
    "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
    "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands",
    "Chad", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Estonia", "Ethiopia", "Finland", "France", "Germany", "Greece", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Malaysia", "Mexico",
    "Netherlands", "New Zealand", "Pakistan", "Philippines", "Poland", "Portugal", "Russia",
    "Saudi Arabia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Ukraine", "United Kingdom", "United States", "Vietnam", "Zimbabwe"
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = countries.filter(country =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  return (
    <>
      <input
        type="text"
        placeholder="Search countries..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredCountries.map((country) => (
        <p key={country}>{country}</p>
      ))}
    </>
  );
};

export default SearchDebounce;
