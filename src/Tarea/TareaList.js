function TareaList(props){

    return(
    
        <table >
        <thead >
          <tr>
            <th >Id</th>
            <th>Descripcion</th>
            <th>Dificultad</th>
            <th>Fecha</th>
            <th>Docente_id</th>
    
          </tr>
    
        </thead>

        <tbody>
        
        {props.children}
    
        </tbody>
        
            </table>
    
    )}
    
    export default TareaList ;