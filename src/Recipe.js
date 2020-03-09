import React from 'react'
import './App.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <img className="image" src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient => (
                  <li>{ingredient.text}</li>  ))}
            </ol>
            {/* <p>Calories:{calories}</p> */}
        </div>
    );
}

export default Recipe;