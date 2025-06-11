import { useState, useEffect } from "react";

const PokemonDropdownAPI = () => {
    const [data, setData] = useState([]);
    const [urldata, setUrlData] = useState();
    const [pokemondata, setPokemondata] = useState();
  
    useEffect(() => {
      fetchAPI();
    }, []);
    useEffect(() => {
      console.log(urldata);
      fetchPokemonData();
    }, [urldata]);
  
    const fetchAPI = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      console.log(data.results);
      setData(data.results);
    };
  
    const handlerOnChange = (e) => {
      setUrlData(e.target.value);
      console.log(e.target.value);
    };
  
    const fetchPokemonData = async () => {
      const res = await fetch(urldata);
      const data = await res.json();
  
      setPokemondata(data.abilities[0]);
      console.log(data.abilities[0]);
    };
  
    return (
      <>
        <div className="App">
          <select onChange={handlerOnChange}>
            {data.map((item) => (
              <option key={item.name} value={item.url}>
                {item.name}
              </option>
            ))}
          </select>
          <p>{pokemondata && pokemondata.ability.name}</p>
        </div>
      </>
    );
}

export default PokemonDropdownAPI