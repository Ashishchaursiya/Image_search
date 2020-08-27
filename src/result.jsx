import React  from "react"
 
const Result = (props)=>{
 const img =`https://source.unsplash.com/600x400/?${props.name}`
 
 
  return(
      <>
      <div>
          <img  src={img} alt="my" className="img-fluid"/>
          
      </div>

 
      </>
  )

}

export default Result;