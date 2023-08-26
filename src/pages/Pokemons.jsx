import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log(response.data);
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>Pokemons</h1>
      <div>
        {data.map((pokemon, index) => (
          <Link key={index} to={`/pokemon/${pokemon.name}`}>
            {pokemon.name}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
