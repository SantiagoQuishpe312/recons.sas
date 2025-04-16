import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.scss';

import logo from '../assets/img/logo.png'; // Asegúrate de importar la imagen

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar el scroll y cambiar el estado de "scrolled"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Se hace scroll más de 50px
      } else {
        setScrolled(false); // No se hace scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
  {/* Logo */}
  <h1 className="navbar__logo">
    <Link to="/">
      <img src={logo} alt="Logo" className="logo-img" />
    </Link>
  </h1>

  {/* Menú de navegación */}
  <ul className={`navbar__menu ${menuOpen ? 'open' : ''}`}>
    <li>
      <Link to="/">Inicio</Link>
    </li>
    <li>
      <Link to="/about">Sobre nosotros</Link>
    </li>
    <li>
      <Link to="/contact">Contacto</Link>
    </li>
   
  </ul>

  {/* Menú hamburguesa */}
  <div
    className="navbar__hamburger"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={24} /> : <Menu size={24} />}
  </div>
</div>

    </nav>
  );
}

export default Navbar;
