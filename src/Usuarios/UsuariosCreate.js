import React, { useState } from "react";
import { createUsuarios } from "../Service/UsuariosService";

function UsuariosCreate() {

    
  
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [status, setStatus]= useState('');


   const onSubmit = (event) => {
   event.preventDefault();
   const objetos = {
   
    username:username,
    password: password,
    status: status

  }
  createUsuarios(objetos)
  }

  const onChange = (event) => {

    if(event.target.name==='username')
   
     setUsername(event.target.value)

     if(event.target.name==='password')
   
     setPassword(event.target.value)
   
   
    if(event.target.name==='status')
   
     setStatus(event.target.value)


   
   }

  return (
    <div>
            <h2>Crear Usuarios</h2>

      <form   onSubmit={onSubmit}>



        <label>
         Username
        <input 
         name="username"
         value={username}
         onChange={onChange}
        />
        </label>

        <label>
         Password
       <input 
         name="password"
         value={password}
         onChange={onChange}
        />
        </label>

        <label>
         Status
        <input 
         name="status"
         value={status}
         onChange={onChange}
        />
        </label>

        <button type="submit"> Guardar </button>

      </form>
      
    </div>
     
  );
}

export default UsuariosCreate;