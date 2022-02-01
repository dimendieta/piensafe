
function Usuarios(props){

return(
      <tr>

      <td> <h2>{props.id}</h2>  </td>
      <td> <p>{props.username}</p> </td>
      <td> <p>{props.password}</p> </td>
      <td> <p>{props.status}</p>  </td>
      
      
  
      </tr>

);

}

export default Usuarios;