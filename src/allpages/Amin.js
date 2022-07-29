import React from 'react'
import {useNavigate } from 'react-router-dom'

function Amin() {

  // IF ELSE CONDITION IN ONE-LINE
  const name="Arvid Dawn Amin"
  const  myNameIs=false

  const Mylala=()=>{
    alalljn(-1)


  }

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
      <button onClick={Mylala}>go back</button>

      {/* IF ELSE CONDITION IN ONE LINE */}

      <h2>{myNameIs? name : "Your origin name is Dawn Amin Ahmed"}</h2>
     
   


    </div>
  )
}

export default Amin
