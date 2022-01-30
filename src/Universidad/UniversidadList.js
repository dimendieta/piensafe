import "./Universidad.css";
function UniversidadList(props){

return(

    <table>
    <thead >
      <tr>
        <th >id</th>
        <th>Nombre</th>
        <th>direccion</th>
        <th>Correo</th>

      </tr>

    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>



        </table>

)}

export default UniversidadList ;