import { Link } from 'react-router-dom';
import './Tarea.css'

function Tarea (props){

return(

    <tr>

    <td> <h2>{props.itemtarea.id}</h2>  </td>
    <td> <p>{props.itemtarea.descripcion}</p> </td>
    <td> <p>{props.itemtarea.dificultad}</p> </td>
    <td> <p>{props.itemtarea.fecha}</p>  </td>
    <td> <p>{props.itemtarea.docente_id}</p>  </td>

    <td><Link to={`/updateTarea/${props.itemtarea.id}`}>Edit</Link></td>

    </tr>
    

);

}
export default Tarea;

