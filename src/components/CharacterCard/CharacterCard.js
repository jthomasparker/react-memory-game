import React from "react";
import "./CharacterCard.css";


const CharacterCard = props => (

    <div className="card bg-dark mb-3">
        <div className="img-container" onClick={()=>{
      props.onGuess(props.id)}}>
            <img alt={props.name} src={props.image} id={props.id} />
        </div>
    </div>
)

export default CharacterCard;