import { useParams } from "react-router-dom";

function UniversidadCourse(){
    const { id } = useParams()
    console.log('id ...  '+id)
return(
    <p>
       Pagina individual de: .. {id}
    </p>
);

}
export default UniversidadCourse;