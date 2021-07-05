import React from "react";
import "./Phonetic.css"

export default function Phonetic(props){
    return(
        <ul className="Phonetic">
            <li className="text">{props.phonetic.text}</li>
            <li><a href={props.phonetic.audio} target="blank"><i class="fas fa-volume-up"></i></a></li>
        </ul>
    );
}