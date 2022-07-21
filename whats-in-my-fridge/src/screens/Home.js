import React, { useEffect } from 'react';
import { useState } from 'react';
//import MyFridge from './MyFridge';
import { useNavigate } from 'react-router-dom';
//import MyFridge from './MyFridge';

function Home(){
const navigate = useNavigate();

const[search,setSearch]=useState("")
const[input,setInput]=useState("")
const[error,setError]=useState("")


    function inputHandling(){
      const arr = search.split(",") 
        console.log("array",arr)
        
        let output = arr.map((item)=>`+${item}`)
        console.log("+added output",output)
        output[0]=output[0].replace("+", '');
        const finalOutput= output.join();
        setInput(finalOutput)

    }
    useEffect(()=>{
      inputHandling()
    },[search])
    
    
    function onClick(){
      console.log("search",search)
      if(search===''){
        setError("Please enter any ingredient")
      }
      else{
        return navigate(`/MyFridge/`+input)

    }
    }

console.log("search",search)
console.log("input",input)
    return (
      <div className="home">
        <h1>This is homepage</h1>
        <input className="input-text-box" value={search} type="text" onChange={(e)=>setSearch(e.target.value)}></input>
        <button onClick={()=>onClick()}>Search</button>
        <h2>{error}</h2>
        
        {/* <button onClick={()=> search!== ""? navigate(`/MyFridge/`+input) : <h2>Please enter ingredients...</h2>}>Search</button> */}
        {/* <MyFridge input={input}/> */}
       
      </div>
    )
  };
  
  export default Home;