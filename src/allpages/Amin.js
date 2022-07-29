import React from 'react'
import { useNavigate } from 'react-router-dom'

function Amin() {

  const alalljn=useNavigate();

  const toamin=()=>{
    alalljn("/")
   
  }
  return (
   
    <div>
      <img src="./image/mylogo1.PNG" alt="" height={200} />
      
      <h1>Hello My name is Bahalul</h1>
      <img src="./image/amin.jpg" alt="" height={500} />
      <button onClick={toamin}>Go to to Alvin</button>
     
   


    </div>
  )
}

export default Amin
