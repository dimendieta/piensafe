import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {  findByIdTarea, updateTarea } from "../Service/TareaService";
import "./Tarea.css";

function TareaUpdate() {

    const {tareaid } = useParams();
    const [tarea, setTarea] = useState({id:'',descripcion:'',dificultad:'',fecha:'',docente_id:''});
    
   const onSubmit = (event) => {
   event.preventDefault();
   updateTarea(tarea);
   }
   

  const onChange = (event) => {

    if(event.target.name==='id')
    setTarea({...tarea,id:event.target.value}) 
    if(event.target.name==='descripcion')
      setTarea({...tarea,descripcion:event.target.value})    
    if(event.target.name==='dificultad')    
      setTarea({...tarea,dificultad:event.target.value})
    if(event.target.name==='fecha')
      setTarea({...tarea,fecha:event.target.value})
      if(event.target.name==='docente_id')
      setTarea({...tarea,docente_id:event.target.value})
   
   }

    useEffect(() => {
      findByIdTarea(tareaid).then(data => {
        setTarea(data);
      }
      );
    }, [tareaid]);

    
  return (
    <div className="boxUpdate">
  
         <form   onSubmit={onSubmit} className="boxFormUpdate">

             <h2 className="subtitulo">Actualizar Datos</h2>

             <input 
             
                className="formUpdateInput"
                name="id"
                placeholder="Id"
                value={tarea.id}
                onChange={onChange}
            />

             <input 
             
                className="formUpdateInput"
                name="descripcion"
                placeholder="Descripcion"
                value={tarea.descripcion}
                onChange={onChange}
            />

            <input 
            
                className="formUpdateInput"
                name="dificultad"
                placeholder="Dificultad"
                value={tarea.dificultad}
                onChange={onChange}
            />

             <input 

                className="formUpdateInput"
                name="fecha"
                placeholder="Fecha"
                value={tarea.fecha}
                onChange={onChange}
            />

             <input 

                className="formUpdateInput"
                name="docente_id"
                placeholder="Docente_id"
                value={tarea.docente_id}
                onChange={onChange}
            />

        <button type="submit" className="formUpdateBoton"> Guardar </button>

      </form>
    </div>
     
  );
}

export default TareaUpdate;