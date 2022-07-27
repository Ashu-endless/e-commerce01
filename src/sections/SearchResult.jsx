import React from "react";
import { useParams } from "react-router-dom";

function SearchResult() {
    let params = useParams()
    return ( <>
    <p>Search Results for {params.slug}</p>
    </> );
}

export default SearchResult;