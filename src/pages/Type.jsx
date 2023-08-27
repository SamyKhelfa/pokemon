import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; 

const Type = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const {type} = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
            console.log(response.data);
            setData(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        fetchData();
    }, [type]);


    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <div>
            <h1>Type</h1>
            <div>
                {data.map((type, index) => (
                    <Link key={index} to={`/type/${type}`}>
                        {type}
                        {console.log(type)}
                    </Link>
                ))}
            </div>
        </div>
    );
};

    export default Type;
