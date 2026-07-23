import {Link} from "react-router-dom";
export default function Navbar(){
    return(
        <ul>
            <li>
                <Link to="/Add">Add</Link>
            </li>
            <li>
                <Link to="/Subtract">Subtract</Link>
            </li>
            <li>
                <Link to="/Multiply">Multiply</Link>
            </li>
        </ul>
    )
}   