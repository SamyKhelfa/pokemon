import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Types = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
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
      <h1>Types</h1>
      <div>
        {data.map((type, index) => (
          <Link key={index} to={`/type/${type.name}`}>
            {type.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Types;
