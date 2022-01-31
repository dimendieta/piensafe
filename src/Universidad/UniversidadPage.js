import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getListUniversidad } from '../Service/UniversidadServicie';
import Universidad from './Universidad';
import UniversidadList from "./UniversidadList";

function UniversidadPage() {

 
    const [universidad, setUniversidad] = useState([]);
    

    useEffect(() => {
      getListUniversidad().then(data => {
        setUniversidad(data);
      }
      );
    }, []);

    
    return (
      <div>
       <h2>Lista de Docentes</h2>
       <Link to='/createUniversidad'> Crear</Link>


       <UniversidadList>

{

universidad.map(item =>
  <Universidad
  key={item.id}
  itemUniversidad={item} />
  
  )
}


      </UniversidadList>

      </div>
     
  );
}

export default UniversidadPage;