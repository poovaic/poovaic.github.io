import React from "react";
import RecipeCard from "./RecipeCard";


function Map(props){
    console.log("props",props)
const {mapping}=props
console.log("api data to be mapped",mapping)
    
return(
        <div className="map">
            {/* creating a recipe card.sending data as props */}
           {mapping !== [] && mapping.map ((item)=>{
        return <RecipeCard
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}/>})
        }
           
        </div>
    )

}
export default Map;

