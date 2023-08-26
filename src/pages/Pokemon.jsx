import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const { name } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      console.log(response.data);
      setLoading(false);
      setData(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>Pokémon</h1>
      <div>{name}</div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
        alt={name}
      />
    </div>
  );
};

export default Pokemon;
