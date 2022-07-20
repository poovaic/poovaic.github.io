import React from 'react';
import {callRecipe} from "../services/ApiCall"
import {useEffect, useState} from 'react';
import Map from "../components/Map"
import Alert from '../components/Alert';

//import {Routes,Route} from 'react-router-dom';
//import Recipe from './Recipe'



//response path in api response- res.data[0].id will return recipeId
function MyFridge(){
    //user inputs
    const[search,setSearch] = useState("")
    //const[number,setNumber] = useState("")
    
    //user input text
    const[ingredients,setIngredients] = useState("")
    
    //api call
    //const[recipeId,setrecipeId]=useState("")
    const[call,setCall]=useState([])

    //Alert state
    const[alert,setAlert]=useState("")
    
  //for manipulating data from input box
    
   function handleData(){
       //extracting ingredients to place in url of api call
        const arr = search.split(",") 
        console.log("array",arr)
        
        let output = arr.map((item)=>`+${item}`)
        console.log("+added output",output)
        output[0]=output[0].replace("+", '');
        const finalOutput= output.join();//milk,+bread,+eggs
        
        // //replacing index 0 element of output array
        // const ingOutput = output[0].replace("+", '');
        // console.log("output2",ingOutput)
        // console.log("check output",output)
        
        // //deleting index0 of output array
        // const remaining = output.shift();
        // console.log("remaining array",output)
        // console.log("remaining",remaining)
        // //adding element at index0 without +sign
        // output.unshift(ingOutput)
        // //finally converting array into a string separated by commas
        // const finalOutput= output.join();//milk,+bread,+eggs

        console.log("ingredients array",output)
        console.log("ingredients url",finalOutput)
        
        //updating the state of ingredients
        setIngredients(finalOutput)
       
    }
    // useEffect(()=>{
    // apiCall()
    // },[ingredients])
  
    useEffect(()=>{
        handleData()
        },[search])
      

    //on click will change ingredients state.first ingredients is empty string. when u use final output in ingredients, it will change it.[]-dependencies array, in this case, this useeffect hook is only dependent on ingredient.whenever ingredient changes, use effect hook will run.


    const onClick=async()=>{
        //if user clicks button without typing anything
        if(ingredients!== ""){
    
        const res = await callRecipe(ingredients)
        console.log("current state of ingredients",ingredients)
        console.log("api-call-response",res)
        if(res.data.length === 0){
            return setAlert("No Recipe with such name!!!")
        }
        let apiOutput=res.data;
        console.log("dot notation api",apiOutput)
            
        setCall(apiOutput)
        //if u dont reset alert, alert state will not be cleared.
        setAlert("")
        setSearch("")
        }
        else{
            setAlert("Please enter ingredients...")
        }
    }

  
    
    console.log("usestate of ingredients",ingredients)
    console.log("usestate of apiresponse setCall",call)
   
    
    //  const apiCall2 = async()={
    //     const res2 = await callInstructions(id)
        
    // }
    
    //function to send data as props to RecipeCard
   
    //when the user clicks the button, format the data first and then make the api call
     


    
    return(
        <div>
            <div className="user-input">
            <input className="input-text-box" type="text" onChange={(e)=>setSearch(e.target.value)}></input>
            
            {/* <input className="input-number-box" type="number" onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} onChange={(e)=>setNumber(e.target.value)}></input> */}
            
            <button onClick={onClick}>Search</button>
            </div>

            <div>
                <Map mapping={call}/>
                </div>
                <div className="error"> 
                {alert !== "" && <Alert alert={alert}/>}
                </div>
            
        </div>
    )
}
export default MyFridge






