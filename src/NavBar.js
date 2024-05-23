import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  return (

    <nav>

      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>

      <NavLink
        to="/coffees"
        className="nav-link"
      >
        Coffees
      </NavLink>

    </nav>

  );

};

export default NavBar;