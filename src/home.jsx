import React, { useState }  from "react"
 import Result from "./result"
const Home = ()=>{
  let [img,Setimg] =useState("")
  
 function Input(e){
Setimg(e.target.value)
 }
 
  return(
      <> 
      <div className="main" style={{background:"black",height:"100vh"}}>
      <input 
      type="text"
      value={img}
       placeholder="search Images"
        onChange={Input}
        className="rounded-pill"
        />
        {img===""?"":<Result name={img}/>}
         
      </div>
      
 
      </>
  )

}

export default Home;