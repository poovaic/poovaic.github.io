import React from 'react';
import {callRecipe} from "../services/ApiCall"
import {useEffect, useState} from 'react';
import Map from "../components/Map"
import Alert from '../components/Alert';
import {useParams} from 'react-router-dom'
//import RecipeCard from '../components/RecipeCard';
import Search from '../components/Search';


//response path in api response- res.data[0].id will return recipeId
function MyFridge(){
    const params = useParams();
   const recipes = params.recipes.replace(/%20/g,'')


  
     const[call,setCall]=useState([])

     const[alert,setAlert]=useState("")
    

    const onLoad=async()=>{

        //if user clicks button without typing anything
        if(recipes!== ""){
    
        const res = await callRecipe(recipes)
        console.log("current state of ingredients",recipes)
        console.log("api-call-response",res)
        if(res.data.length === 0){
            return setAlert("No Recipe with such name!!!")
        }
        let apiOutput=res.data;
        console.log("dot notation api",apiOutput)
            
        setCall(apiOutput)
        //if u dont reset alert, alert state will not be cleared.
        setAlert("")
        //setSearch("")
        }
        else{
            setAlert("Please enter ingredients...")
        }
    }
    useEffect(()=>{
        onLoad()
        },[params.recipes])
      
  
    
    // console.log("usestate of ingredients",ingredients)
    // console.log("usestate of apiresponse setCall",call)
   


    
    return(
        <div>
            <Search/>

           

            <div>
                <Map mapping={call} recipes={recipes} />
                </div>
                <div className="error"> 
                {alert !== "" && <Alert alert={alert}/>}
                </div>
            
        </div>
    )
}
export default MyFridge






