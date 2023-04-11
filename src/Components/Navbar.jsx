import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Navbar.css";
import { DarkThemeContext } from "../context/DarkThemeContext";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { isModoOscuro, setIsModoOscuro } = useContext(DarkThemeContext);

  const handleModoDark = () => {
    if (isModoOscuro) {
      setIsModoOscuro(false)
      
    } else {
      setIsModoOscuro(true)
      
    }
  }

  return (
    <nav className= {isModoOscuro ? "dark" : "app"}>
      

      <div className="logo">
        <h2> DH ODONTO</h2>
      </div>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        
        <button onClick={handleModoDark} >Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
