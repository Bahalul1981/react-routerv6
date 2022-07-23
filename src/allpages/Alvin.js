import React from 'react'
import { NavLink } from "react-router-dom";
function Alvin() {
  return (
    <div>
       <img src="./image/mylogo1.PNG" alt="" height={200} />
      <h1>Hello welcome to Alvin Dawn </h1>
      <img src="./image/alvin2.JPG" alt="" height={500} />
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

export default Alvin
