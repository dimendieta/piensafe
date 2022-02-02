import React, { useState } from "react";
import { createTarea } from "../Service/TareaService";


function TareaCreate() {

    
  
    const [descripcion, setDescripcion]= useState('');
    const [dificultad, setDificultad]= useState('');
    const [fecha, setFecha]= useState('');
    const [docente_id, setDocente_id]= useState('');


   const onSubmit = (event) => {
   event.preventDefault();
   const objetos = {
   
    descripcion:descripcion,
    dificultad: dificultad,
    fecha:fecha,
    docente_id:docente_id

  }
  createTarea(objetos)
  }

  const onChange = (event) => {

    if(event.target.name==='descripcion')
   
     setDescripcion(event.target.value)

     if(event.target.name==='dificultad')
   
     setDificultad(event.target.value)
   
   
    if(event.target.name==='fecha')
   
     setFecha(event.target.value)

     if(event.target.name==='docente_id')
   
     setDocente_id(event.target.value)
   
   }

  return (
    <div>
            <h2>Crear Usuarios</h2>

      <form   onSubmit={onSubmit}>



        <label>
         Descripcion
        <input 
         name="descripcion"
         value={descripcion}
         onChange={onChange}
        />
        </label>

        <label>
        Dificultad
       <input 
         name="dificltad"
         value={dificultad}
         onChange={onChange}
        />
        </label>

        <label>
         Fecha
        <input 
         name="fecha"
         value={fecha}
         onChange={onChange}
        />
        </label>

        <label>
         Docente_id
        <input 
         name="docente_id"
         value={docente_id}
         onChange={onChange}
        />
        </label>

        <button type="submit"> Guardar </button>

      </form>
      
    </div>
     
  );
}

export default TareaCreate;