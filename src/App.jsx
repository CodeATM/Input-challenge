import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Register/>} />
          <Route path="/admin" element = {<Admin/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
