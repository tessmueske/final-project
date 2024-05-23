import { NavLink } from "react-router-dom"; 
import "./NavBar.css";
import './App.css';

function NavBar() {

  return (
    <nav className="navbar">
    <NavLink to="/" className="nav-link" >take me home</NavLink>
    <NavLink to="/about" className="nav-link" >about us</NavLink>
    <NavLink to="/coffees" className="nav-link" >coffees</NavLink>
    </nav>
  );
};

export default NavBar;