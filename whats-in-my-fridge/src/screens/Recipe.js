import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { ListItem } from "@mui/material";



function Recipe(){
    //const{recipe_id}=useParams();
    let params= useParams();
    console.log("recipe-id params",params.recipe_id)
    const navigate = useNavigate();

    
    const [callIns,setCallIns]=useState([])
    const [activeTab,setActiveTab]=useState("instructions")

    async function callInstructions(id){
        
        let instructionsResponse = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_FRIDGE_API_KEY}`)
       console.log("initial api output",instructionsResponse)
       
        let output= instructionsResponse.data;
        console.log("api output",output)
        if(output){
            setCallIns(output)
        }

    }
    useEffect(()=>{
      callInstructions(params.recipe_id)
    },[params.recipe_id])
console.log("callIns",callIns.extendedIngredients)
//const mapping=callIns.extendedIngredients
   
    return(
        <div className="recipe-container">
            
            <div className="recipe">
            <img className="recipe-image" src={callIns.image} alt = "Post Banner" loading="lazy"/>
            <h2>{callIns.title}</h2>
            
            <div className="buttons-ins">
                <div className="buttons">
                <button className={activeTab==='instructions'? 'active': ''}onClick={(()=>setActiveTab("instructions"))}>Instructions</button>
                
                <button className={activeTab==='ingredients'? 'active': ''}onClick={(()=>setActiveTab("ingredients"))}>Ingredients</button>
            
                
            </div>
            {activeTab==='ingredients' && (
                <ul>
                {callIns.extendedIngredients.map((ingredient)=>
                <li key={ingredient.id}>{ingredient.original}</li>)}
            </ul>
            )}
            {activeTab==='instructions' && (
                <div className="instructions" dangerouslySetInnerHTML={{ __html: callIns.instructions }}></div>
            )}
           
            
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
        </div>
        </div>
    )
}



export default Recipe