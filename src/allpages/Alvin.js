import React from 'react'
import { Outlet } from 'react-router-dom'
import Heade from '../components/Heade'

function Alvin() {
  return (
   

      <div>
   
         < Heade />

         <Outlet />
      </div>
        
   

  )
}

export default Alvin
