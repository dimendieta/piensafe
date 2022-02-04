import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Componentes/Navbar";

import UniversidadCourses from "./Course/UniversidadCourses";
import UniversidadPage from './Universidad/UniversidadPage';
import UniversidadUpdate from './Universidad/UniversidadUpdate';
import UniversidadCreate from './Universidad/UniversidadCreate';
import UniversidadCourse from "./Course/UniversidadCourse";

import UsuariosPage from "./Usuarios/UsuariosPage";
import UsuariosUpdate from "./Usuarios/UsuariosUpdate";
import UsuariosCreate from "./Usuarios/UsuariosCreate";
import UsuariosCourse from "./Course/UsuariosCourse";

import TareaPage from "./Tarea/TareaPage";
import TareaUpdate from "./Tarea/TareaUpdate";
import TareaCreate from "./Tarea/TareaCreate";
import TareaCourse from "./Course/TareaCourse";

import Login from "./Login/Login";




function App() {
  return (

 
  
   
<BrowserRouter>
  <Navbar />
    <Routes>

    <Login/>

      <Route path="/university" element={< UniversidadPage />} /> 
      <Route path="/universidadcourses" element={< UniversidadCourses />} />
      <Route path="/universidadcourse" element={< UniversidadCourse />} />
      <Route path="/updateUniversidad/:docenteid" element={< UniversidadUpdate />} />   
      <Route path="/createUniversidad" element={< UniversidadCreate/>} />     


      <Route path="/usuarios" element={< UsuariosPage/>} />
      <Route path="/createUsuarios" element={< UsuariosCreate/>} />
      <Route path="/updateUsuarios/:usuariosid" element={< UsuariosUpdate />} />  
      <Route path="/usuarioscourse" element={< UsuariosCourse />} />
      
      <Route path="/tarea" element={< TareaPage/>} />
      <Route path="/createTarea" element={< TareaCreate/>} />
      <Route path="/updateTarea/:tareaid" element={< TareaUpdate />} />  
      <Route path="/tareacourse" element={< TareaCourse />} />
      

      
     

    

    </Routes>
  </BrowserRouter>   
  );
}

export default App;