import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';



function Recipe(){
    //const{recipe_id}=useParams();
    let params= useParams();
    console.log("recipe-id params",params.recipe_id)
    const navigate = useNavigate();

    
    const [callIns,setCallIns]=useState([])

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

   
    return(
        <div className="recipe-container">
            <div className="recipe">
            <img src={callIns.image} alt = "Post Banner" loading="lazy"/>
            <h3>{callIns.title}</h3>
            {/* <p>{callIns.instructions}</p> */}
            <div dangerouslySetInnerHTML={{ __html: callIns.instructions }}></div>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            </div>
        </div>
    )
}
export default Recipe