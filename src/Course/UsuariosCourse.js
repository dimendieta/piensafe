import { useParams } from "react-router-dom";

function UsuariosCourse(){
    const { id } = useParams()
    console.log('id ...  '+id)
return(
    <p>
       Pagina individual de: .. {id}
    </p>
);

}
export default UsuariosCourse;