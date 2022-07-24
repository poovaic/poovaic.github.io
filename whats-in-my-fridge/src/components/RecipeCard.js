import React from "react";
import {useNavigate} from 'react-router-dom';

function RecipeCard(props){
console.log("props in recipecard",props)
const navigate = useNavigate();

    return(
        <div className="recipe-card" key={props.id}>
                        <h3 className="recipe-card-name">{props.title}</h3>

            <img className="recipeimage"src={props.image} alt="Post banner"/>
            
            <div className="recipe-card-button">
            <button onClick={()=>navigate(`/MyFridge/${props.recipes}/${props.id}`)}>Click for Recipe</button>
            </div>

        </div>
    
    )
}
export default RecipeCard

