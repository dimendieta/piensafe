import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import UniversidadCourses from "./Course/UniversidadCourses";
import UniversidadPage from './Universidad/UniversidadPage';
import UniversidadUpdate from './Universidad/UniversidadUpdate';
import UniversidadCreate from './Universidad/UniversidadCreate';
import Navbar from "./Componentes/Navbar";
import UniversidadCourse from "./Course/UniversidadCourse";



function App() {
  return (
  
<BrowserRouter>
  <Navbar />
    <Routes>

      <Route path="/university" element={< UniversidadPage />} /> 
      <Route path="/universidadcourses" element={< UniversidadCourses />} />
      <Route path="/universidadcourse" element={< UniversidadCourse />} />
      <Route path="/updateUniversidad/:docenteid" element={< UniversidadUpdate />} />
      <Route path="/createUniversidad" element={< UniversidadCreate/>} />

     

    

    </Routes>
  </BrowserRouter>   
  );
}

export default App;