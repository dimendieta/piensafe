import { Link } from "react-router-dom";
import "./Universidad.css";

function Universidad(props){

return(
      <tr>

      <td> <h2>{props.itemUniversidad.id}</h2>  </td>
      <td> <p>{props.itemUniversidad.nombre}</p> </td>
      <td> <p>{props.itemUniversidad.direccion}</p> </td>
      <td> <p>{props.itemUniversidad.correo}</p>  </td>

      <td><Link to={`/updateUniversidad/${props.itemUniversidad.id}`}>Edit</Link></td>
  
      </tr>

);

}

export default Universidad;