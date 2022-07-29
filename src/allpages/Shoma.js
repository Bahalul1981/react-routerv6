import React from 'react'
import { useNavigate } from 'react-router-dom'

function Shoma() {
  const navigate=useNavigate();

  const alvinpage=()=>{
     navigate("/")
  }

  return (
   
    <div>
      <img src="./image/mylogo1.PNG" alt="" height={200} />
      <img src="./image/alvin2.JPG" alt="" height={500} />
      <h2>Hello I am farhana Yasmin</h2>
      <button onClick={alvinpage}>Go to Alvin Page</button>
      
   

    </div>
  )
}

export default Shoma

