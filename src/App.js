import { BrowserRouter,Route, Routes } from "react-router-dom";
import Alvin from "./allpages/Alvin";
import Amin from "./allpages/Amin";
import Shoma from "./allpages/Shoma";
import './App.css';

function App() {
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

export default App;
