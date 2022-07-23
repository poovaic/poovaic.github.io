import React from 'react'
import {useState,useEffect} from 'react';
import{useNavigate} from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";


function Search(props){
    const[search,setSearch]=useState("")
    const[input,setInput]=useState("")
    const[error,setError]=useState("")
    const {alert}=props;



   

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

    function onClick(){
        console.log("search",search)
        if(search===''){
          setError("Please enter any ingredient")
        }
        else{
          navigate(`/MyFridge/`+input)
          setError("")

      }
  
      }

  
  console.log("search",search)
  console.log("input",input)
    
  
    return (
      <div className="search-wrapper">
        
        <div className="search">
            {/* <h1>This is search</h1> */}

            <TextField id="outlined-helperText" 
            label="Ingredient 1, Ingredient 2, etc..." 
            helperText="Enter ingredients separated by a comma"
            variant="outlined" className="input-text-box" 
            type="text" onInput={(e)=>setSearch(e.target.value)} value={search} 
            size="small"/>


            <IconButton  aria-label="Search" style={{color:"black"}}  onClick={()=>onClick()}><SearchIcon/>Search</IconButton> 
            
            {error!=="" &&<h2>{error}</h2>}
            {error!=="Please enter any ingredient" && <h2>{alert}</h2>}
      
   
            {/* <button onClick={()=>navigate(`/MyFridge/`+input)}>Search</button> */}
            {/* <button onClick={()=>onClick()}>Search</button> */}
      
        </div>
    </div>
  )
}

export default Search
