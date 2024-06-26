import { NavLink } from "react-router-dom"; 
import "./NavBar.css";
import './App.css';

function NavBar() {

  return (
    <nav className="navbar">
    <NavLink to="/home" className="nav-link" >home</NavLink>
    <NavLink to="/about" className="nav-link" >about us</NavLink>
    <NavLink to="/coffees" className="nav-link" >coffees</NavLink>
    <NavLink to="/coffees/new" className="nav-link" >add your coffee</NavLink>
    </nav>
  );
};

export default NavBar;