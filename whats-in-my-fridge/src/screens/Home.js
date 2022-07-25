import React, { useEffect } from 'react';
//import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';
//import{useState} from 'react';
//import axios from 'axios';
function Home(){
  // const[call,setCall]=useState("")
   
  // async function callTrivia(){
  //   console.log("home")
  //   const response = await axios.get(`https://api.spoonacular.com/food/trivia/random?apiKey=484988b70b4542d3b945d6e3502e0430`)
  //   console.log(response)
  //   const data=response.data.text
  //   setCall(data)
  // }
 

  // useEffect(() => {
  //   callTrivia();
  // }, []);
// const navigate = useNavigate();

// const[search,setSearch]=useState("")
// const[input,setInput]=useState("")
// const[error,setError]=useState("")


//     function inputHandling(){
//       const arr = search.split(",") 
//         console.log("array",arr)
        
//         let output = arr.map((item)=>`+${item}`)
//         console.log("+added output",output)
//         output[0]=output[0].replace("+", '');
//         const finalOutput= output.join();
//         setInput(finalOutput)

//     }
//     useEffect(()=>{
//       inputHandling()
//     },[search])
    
    
//     function onClick(){
//       console.log("search",search)
//       if(search===''){
//         setError("Please enter any ingredient")
//       }
//       else{
//         setError("")
//         return navigate(`/MyFridge/`+input)

//     }

//     }

// console.log("search",search)
// console.log("input",input)
    return (
    <div className="home-bg">

      {/* <div className="trivia">
             <h2>Did you know? {call}</h2> 
             </div> */}
      <div className="home">
        <Search/>
        {/* <input className="input-text-box" value={search} placeholder="ingredient1,ingredient2,..." type="text" onChange={(e)=>setSearch(e.target.value)}></input>
        <button onClick={()=>onClick()}>Search</button> 
      
        <h2>{error}</h2>
        
      */}

      </div>
      </div>

    )
  };
  
  export default Home;