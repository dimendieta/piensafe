import { Link } from 'react-router-dom';
import './Tarea.css'

function Tarea (props){

return(

    <tr>

    <td> <h2>{props.itemtarea.id}</h2>  </td>
    <td> <p>{props.itemtarea.username}</p> </td>
    <td> <p>{props.itemtarea.password}</p> </td>
    <td> <p>{props.itemtarea.status}</p>  </td>

    <td><Link to={`/updateTarea/${props.itemtarea.id}`}>Edit</Link></td>

    </tr>
    

);

}
export default Tarea;

