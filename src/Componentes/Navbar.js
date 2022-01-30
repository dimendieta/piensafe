import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/university"} className="navlink">
                    Docente
                </NavLink>

            </li>
            <li>
                <NavLink to={"/university"} className="navlink">
                    Tarea
                </NavLink>
            </li>
        
       
        </ul>

    );

}