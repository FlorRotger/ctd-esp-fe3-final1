import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Navbar.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <div className="logo">
        <h2> DH ODONTO</h2>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button>Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
