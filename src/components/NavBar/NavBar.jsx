import "./NavBar.scss";
import {Link} from "react-router-dom";

const NavBar = () =>{
    return(
    <div className="nav-bar">
        <Link className="nav-bar__link" to="/">
            Home
        </Link>

        <Link className="nav-bar__link" to="/bosses">
            Bosses
        </Link>

        <Link className="nav-bar__link" to="/bosses/create">
        Add Boss
        </Link>
    </div>
    )
}
export default NavBar;