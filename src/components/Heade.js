import React from 'react'

// I IMPORTED NAVLINK AND USED THEM TO IDENTIFY WHITCH LINKED I CLICKED. I MADE CSS STYLE FOR MORE CLEAR
import { NavLink } from "react-router-dom";
function Heade() {
  return (
    <div>
         <nav>
            <ul>
                <li><NavLink to="/">Alvin</NavLink></li>
                <li><NavLink to="/shoma">shoma</NavLink></li>
                <li><NavLink to="/amin">amin</NavLink></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Heade
