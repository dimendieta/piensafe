import React, { useState, useEffect } from "react";
import {  getListUsuarios } from '../Service/UsuariosService';
import Usuarios from "./Usuarios";
import UsuariosList from "./UsuariosList";
import { Link } from "react-router-dom";
import "./Usuarios.css";




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
       


   
       <UsuariosList>

{

usuarios.map(item =>
  <Usuarios
  key={item.id}
  itemusuarios={item} />
  
  )
}


      </UsuariosList>


    

      </div>
     
  );
}

export default UsuariosPage;