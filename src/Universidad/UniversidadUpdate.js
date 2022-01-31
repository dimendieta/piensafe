import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { findByIdUniversidad, updateUniversidad } from "../Service/UniversidadServicie";
import "./Universidad.css";

function UniversidadUpdate() {

    const {docenteid } = useParams();
    const [universidad, setUniversidad] = useState({id:'',nombre:'',direccion:'',correo:''});
    
   const onSubmit = (event) => {
   event.preventDefault();
   updateUniversidad(universidad);
   }
   

  const onChange = (event) => {

    if(event.target.name==='nombre')
      setUniversidad({universidad,nombre:event.target.value})    
    if(event.target.name==='direccion')    
      setUniversidad({universidad,direccion:event.target.value})
    if(event.target.name==='correo')
      setUniversidad({universidad,correo:event.target.value})
   
   }

    useEffect(() => {
      findByIdUniversidad(docenteid).then(data => {
        setUniversidad(data);
      }
      );
    }, [docenteid]);

    
  return (
    <div className="boxUpdate">
  
         <form   onSubmit={onSubmit} className="boxFormUpdate">

             <h2 className="subtitulo">Actualizar Datos</h2>

             <input 
             
                className="formUpdateInput"
                name="nombre"
                placeholder="Nombre"
                value={universidad.nombre}
                onChange={onChange}
            />

            <input 
            
                className="formUpdateInput"
                name="direccion"
                placeholder="Direccion"
                value={universidad.direccion}
                onChange={onChange}
            />

             <input 

                className="formUpdateInput"
                name="correo"
                placeholder="Correo"
                value={universidad.correo}
                onChange={onChange}
            />

        <button type="submit" className="formUpdateBoton"> Guardar </button>

      </form>
    </div>
     
  );
}

export default UniversidadUpdate;