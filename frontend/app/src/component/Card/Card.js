import React, {useState} from "react";
import './Card.css';


function Card(props)
{
    return(
    <div className='card-control'>
        <img src={props.digiPic} alt=""></img>
    </div>
)}

export default Card;