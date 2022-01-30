import React, { useState, useEffect } from "react";
import { getListUniversidad,createUniversidad } from '../Service/UniversidadServicie';
import Universidad from './Universidad';
import UniversidadList from "./UniversidadList";

function UniversidadPage() {

 
    const [universidad, setUniversidad] = useState([]);
    
    const [id, setid]= useState('');
    const [nombre, setNombre]= useState('');
    const [direccion, setDireccion]= useState('');
    const [correo, setCorreo]= useState('');

   


   const onSubmit = (event) => {
    
   event.preventDefault();
   
   
   const objeto = {
    id: id,
    nombre: nombre,
    direccion:direccion,
    correo: correo,

  }
  createUniversidad(objeto)

  }

  const onChange = (event) => {
    if(event.target.name==='id')
   
     setid(event.target.value)
   
    if(event.target.name==='nombre')
   
     setNombre(event.target.value)

     if(event.target.name==='direccion')
   
     setDireccion(event.target.value)
   
   
    if(event.target.name==='correo')
   
     setCorreo(event.target.value)


   
   }

    useEffect(() => {
      getListUniversidad().then(data => {
        setUniversidad(data);
      }
      );
    }, []);

    
  return (
    <div>
  

      <h1>Listado Docentes</h1>

      <form   onSubmit={onSubmit}>
<label>
  Id
<input 

name="id"
value={id}
onChange={onChange}
/>
</label>

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



        <button type="submit">
        Guardar
        </button>





      </form>

  <UniversidadList>
        {universidad.map(universidad => (
         
          <Universidad key={universidad.id} id={universidad.id}nombre={universidad.nombre} direccion={universidad.direccion} correo={universidad.correo} />
          
        ))}
        
      </UniversidadList>


    
      
      
    
    </div>
     
  );
}

export default UniversidadPage;