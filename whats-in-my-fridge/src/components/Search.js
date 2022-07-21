import React from 'react'
import {useState,useEffect} from 'react';
import{useNavigate} from 'react-router-dom';

function Search(){
    const[search,setSearch]=useState("")
    const[input,setInput]=useState("")

    const navigate=useNavigate();

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
  
   
    
    return (
    <div>
      <h1>This is search</h1>
        
        <input className="input-text-box" type="text" onChange={(e)=>setSearch(e.target.value)} value={search} ></input>

        <button onClick={()=>navigate(`/MyFridge/`+input)}>Search</button>

    </div>
  )
}

export default Search
