import React, { useState, useEffect } from "react";
import TareaList from "./TareaList";
import { Link } from "react-router-dom";
import "./Tarea.css";
import Tarea from "./Tarea";
import { getListTarea } from "../Service/TareaService";




function TareaPage() {

 
    const [tarea, setTarea] = useState([]);
    

    useEffect(() => {
      getListTarea().then(data => {
        setTarea(data);
      }
      );
    }, []);

    
    return (
      <div>
       <h2 >Lista de Tareas</h2>
       <Link to='/createTarea' className="estilocrear"> Crear</Link>
       


   
       <TareaList>

{

tarea.map(item =>
  <Tarea
  key={item.id}
  itemtarea={item} />
  
  )
}


      </TareaList>


    

      </div>
     
  );
}

export default TareaPage;