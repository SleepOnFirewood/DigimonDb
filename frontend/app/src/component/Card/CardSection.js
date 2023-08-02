import React from 'react';
import './CardSection.css'
import Card from './Card';


const CardSection = props =>
{
    
    if (Array.isArray(props.digiPic) === false)
    {
        return <p>Invalid</p>
        
    }
    return <p>
        {
        props.digiPic.map((card => <Card digiPics = {card}></Card>))
    }
    </p>
  
}

export default CardSection