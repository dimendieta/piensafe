function UsuariosList(props){

    return(
    
        <table >
        <thead >
          <tr>
            <th >Id</th>
            <th>username</th>
            <th>password</th>
            <th>status</th>
    
          </tr>
    
        </thead>
        
        {props.children}
    
            </table>
    
    )}
    
    export default UsuariosList ;