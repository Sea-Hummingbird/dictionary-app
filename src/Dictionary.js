import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos"
import axios from "axios";
import './Dictionary.css';

export default function Dictionary (){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0])
    }

    function handlePexelsResponse (response){
        setPhotos(response.data.photos)

    }

    function search (event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001f1895783ded640e29d14e5ac4e3f97e8";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);

    }

    function handleKeywordChange (event){
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
           <form onSubmit={search}>
               <input type="search" onChange={handleKeywordChange} />
           </form>
           <Results results={results}/>
           <Photos photos={photos} />
        </div>
    );
}