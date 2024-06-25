import React, { useState } from 'react';

const DropdownExample = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);

    // Simulated API call to fetch states based on selected country
    // Replace with actual API call in real scenario
    if (selectedCountry === "USA") {
      setStates(["New York", "California", "Texas"]);
    } else if (selectedCountry === "Canada") {
      setStates(["Ontario", "Quebec", "British Columbia"]);
    } else {
      setStates([]);
    }
  };

  return (
    <div>
      <label>Select Country:</label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>

      <label>Select State:</label>
      <select>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownExample;
