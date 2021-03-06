import React from "react";
import Synonyms from "./Synonyms"
import "./Meaning.css"

export default function Meaning(props){
    return(
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index){
                return (
                    <div key={index}>
                        <p className="definition">
                            {definition.definition} <br />
                            <em className="example"> {definition.example}</em> <br />
                            <Synonyms synonyms={definition.synonyms}/>
                        </p>
                    </div>
                );
            })}
        </div>
    )
}