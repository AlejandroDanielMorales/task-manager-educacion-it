import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaEvernote, FaSearch } from 'react-icons/fa';
import { FaNoteSticky } from 'react-icons/fa6';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1><FaEvernote/> Pendientazo</h1>
      </div>
      
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Buscar..." />
      </div>
    </header>
  );
}
