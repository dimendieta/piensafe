import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/universidad"} className="navlink">
                    Docente
                </NavLink>

            </li>
            <li>
                <NavLink to={"/universidad"} className="navlink">
                    Tarea
                </NavLink>
            </li>
        
       
        </ul>

    );

}