import { NavLink } from "react-router-dom";
import './Footer.css'
function  Footer() {
    return ( <>
    <div id="Footer" >
<NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to="/e-commerce01"><i class="bi bi-house"></i></NavLink>
<NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to="/ss"><i class="bi bi-diagram-3"></i></NavLink>
<NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to="/my_cart"><i class="bi bi-cart"></i></NavLink>
<NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to="/profile"><i class="bi bi-person"></i></NavLink>

    </div>
    </> );
}

export default Footer ;