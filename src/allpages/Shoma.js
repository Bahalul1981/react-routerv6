import React from 'react'
import { NavLink } from "react-router-dom";
function Shoma() {
  return (
   
    <div>
      <img src="./image/mylogo1.PNG" alt="" height={200} />
      <h2>Hello I am farhana Yasmin</h2>
      <img src="./image/alvin.JPG" alt="" height={500} />
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

export default Shoma

