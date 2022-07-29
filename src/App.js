import { BrowserRouter,Route, Routes } from "react-router-dom";
import Alvin from "./allpages/Alvin";
import Amin from "./allpages/Amin";
import Shoma from "./allpages/Shoma";
import './App.css';

function App() {
  return (
    <BrowserRouter>
 
      <Routes>
         {/* TO MAKE NESTED RAUTER I CLOSED FIRST ROUTE TO END  */}
        <Route  path="/" element={<Alvin />}>
        <Route  path="shoma" element={<Shoma />}/>
        <Route  path="amin" element={<Amin />}/>
        <Route  path="*" element={<div><h1>404 <br /> Something went wrong</h1></div>}/>

        {/* THIS IS MY CLOSING RAUTER */}
        </ Route >
        

      </Routes>


  </BrowserRouter>
   
  );
}

export default App;
