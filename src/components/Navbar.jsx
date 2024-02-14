import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'; 
const Navbar = () => {
  return (
    <div className="navbar"> {/* Agrega la clase 'navbar' para aplicar los estilos */}
      <Link to={'/'}>
        <h1>logo</h1>
      </Link>
      <ul>
        <li>
          <NavLink to={'/'}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to={'categoria/Billeteras'}>Billetera Hombre</NavLink>
        </li>
        <li>
          <NavLink to={'categoria/BilleMujer'}>Billetera Mujer</NavLink>
        </li>
        <li>
          <NavLink to={'categoria/Portadocumento'}>Portadocumento</NavLink>
        </li>
      
      <li>
          <NavLink to={'categoria/Tarjetero'}>Tarjetero</NavLink>
        </li>
      </ul>


      <h1>cartwidget</h1>
    </div>
  );
};

export default Navbar;
