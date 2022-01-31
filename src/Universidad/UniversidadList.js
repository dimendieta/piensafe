function UniversidadList(props){

return(

    <table >
    <thead >
      <tr>
        <th >Id</th>
        <th>Nombre</th>
        <th>Direccion</th>
        <th>Correo</th>

      </tr>

    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>

        </table>

)}

export default UniversidadList ;