import { Link } from "react-router-dom";
import "./Usuarios.css";

function Usuarios(props){

return(
      <tr>

      <td> <h2>{props.itemusuarios.id}</h2>  </td>
      <td> <p>{props.itemusuarios.username}</p> </td>
      <td> <p>{props.itemusuarios.password}</p> </td>
      <td> <p>{props.itemusuarios.status}</p>  </td>

      <td><Link to={`/updateUsuarios/${props.itemusuarios.id}`}>Edit</Link></td>
  
      </tr>

);

}

export default Usuarios;