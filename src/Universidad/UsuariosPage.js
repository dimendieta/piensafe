import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {  getListUsuarios } from '../Service/UniversidadServicie';
import Usuarios from "./Usuarios";


function UsuariosPage() {

 
    const [usuarios, setUsuarios] = useState([]);
    

    useEffect(() => {
      getListUsuarios().then(data => {
        setUsuarios(data);
      }
      );
    }, []);

    
    return (
      <div>
       <h2 >Lista de Usuarios</h2>
       <Link to='/createUsuarios' className="estilocrear"> Crear</Link>


   

{



usuarios.map(usuarios => (
         
    <Usuarios key={usuarios.id} id={usuarios.id}username={usuarios.username} password={usuarios.password} status={usuarios.status} />
    
  ))}
  




    

      </div>
     
  );
}

export default UsuariosPage;