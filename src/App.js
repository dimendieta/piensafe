import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import UniversidadPage from './Universidad/UniversidadPage';

function App() {
  return (
  
<BrowserRouter>
  <Navbar />
    <Routes>

      <Route path="/universidad" element={< UniversidadPage />} /> 

    </Routes>
  </BrowserRouter>   
  );
}

export default App;