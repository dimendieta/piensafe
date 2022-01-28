import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/universidad"} className="navlink">
                    Profesores
                </NavLink>

            </li>
            <li>
                <NavLink to={"/courses"} className="navlink">
                    Cursos
                </NavLink>
            </li>
        
       
        </ul>

    );

}