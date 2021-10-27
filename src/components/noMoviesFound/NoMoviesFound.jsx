import React from 'react';
import { useParams } from "react-router-dom";

const NoMoviesFound = () => {
    const { query } = useParams();
    
    return (
        <p>No Movies Found: "{ query }"</p>
    )
}

export default NoMoviesFound;
