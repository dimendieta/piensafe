import React, { useState } from "react";
import { createUniversidad } from '../Service/UniversidadServicie';


function UniversidadCreate() {

    
    const [nombre, setNombre]= useState('');
    const [direccion, setDireccion]= useState('');
    const [correo, setCorreo]= useState('');


   const onSubmit = (event) => {
   event.preventDefault();
   const objeto = {
   
    nombre: nombre,
    direccion:direccion,
    correo: correo,

  }
  createUniversidad(objeto)
  }

  const onChange = (event) => {

    if(event.target.name==='nombre')
   
     setNombre(event.target.value)

     if(event.target.name==='direccion')
   
     setDireccion(event.target.value)
   
   
    if(event.target.name==='correo')
   
     setCorreo(event.target.value)


   
   }

  return (
    <div>
            <h2>Crear Docentes</h2>

      <form   onSubmit={onSubmit}>



        <label>
         Nombre
        <input 
         name="nombre"
         value={nombre}
         onChange={onChange}
        />
        </label>

        <label>
         Direccion
       <input 
         name="direccion"
         value={direccion}
         onChange={onChange}
        />
        </label>

        <label>
         Correo
        <input 
         name="correo"
         value={correo}
         onChange={onChange}
        />
        </label>

        <button type="submit"> Guardar </button>

      </form>
      
    </div>
     
  );
}

export default UniversidadCreate;