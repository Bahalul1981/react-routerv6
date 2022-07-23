
COMMAND FOR RAOUT V6

1. npx create-react-app router-tutorial
2. npm install react-router-dom@6

NOW HAVE TO IMFORT COD IN App.js

3. import { BrowserRouter,Route, Routes } from "react-router-dom";

AND THEN

4. function App() {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route  path="/" element={<Alvin />}/>
        <Route  path="shoma" element={<Shoma />}/>
        <Route  path="amin" element={<Amin />}/>
      </Routes>

  </BrowserRouter>
   
  );
}

AND THEN HAVE TO CREAT RAOUTER AND LINK THE RAUTER WITH THIS TYPE OF COD

5. import { NavLink } from "react-router-dom";

6.    <img src="./image/mylogo1.PNG" alt="" height={200} />
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

7. IMAGE HAVE TO SET IN PUBLIC FOLDER NOT IN SRC FOLDER


MORE INFORMATION : https://reactrouter.com/docs/en/v6/getting-started/tutorial#installation
