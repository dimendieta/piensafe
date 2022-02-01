import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {  findByIdUsuarios, updateUsuarios } from "../Service/UsuariosService";
import "./Usuarios.css";

function UsuariosUpdate() {

    const {usuariosid } = useParams();
    const [usuarios, setUsuarios] = useState({id:'',username:'',password:'',status:''});
    
   const onSubmit = (event) => {
   event.preventDefault();
   updateUsuarios(usuarios);
   }
   

  const onChange = (event) => {

    if(event.target.name==='username')
      setUsuarios({usuarios,username:event.target.value})    
    if(event.target.name==='password')    
      setUsuarios({usuarios,password:event.target.value})
    if(event.target.name==='status')
      setUsuarios({usuarios,status:event.target.value})
   
   }

    useEffect(() => {
      findByIdUsuarios(usuariosid).then(data => {
        setUsuarios(data);
      }
      );
    }, [usuariosid]);

    
  return (
    <div className="boxUpdate">
  
         <form   onSubmit={onSubmit} className="boxFormUpdate">

             <h2 className="subtitulo">Actualizar Datos</h2>

             <input 
             
                className="formUpdateInput"
                name="username"
                placeholder="Username"
                value={usuarios.username}
                onChange={onChange}
            />

            <input 
            
                className="formUpdateInput"
                name="password"
                placeholder="Password"
                value={usuarios.password}
                onChange={onChange}
            />

             <input 

                className="formUpdateInput"
                name="status"
                placeholder="Status"
                value={usuarios.status}
                onChange={onChange}
            />

        <button type="submit" className="formUpdateBoton"> Guardar </button>

      </form>
    </div>
     
  );
}

export default UsuariosUpdate;