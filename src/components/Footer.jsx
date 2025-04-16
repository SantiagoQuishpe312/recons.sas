import { Link } from 'react-router-dom';
import './Footer.scss';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { SiTiktok } from 'react-icons/si'; // <- TikTok icon
import { FaLink } from 'react-icons/fa';
import AevisionLogo from '../assets/img/logo.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo o nombre */}
        <div className="footer__logo">
          <img src={AevisionLogo} alt="Logo de AeVision" />
        </div>

        {/* Navegación */}
        <ul className="footer__nav">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Acerca</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>

        {/* Redes sociales */}
        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=61575111474505" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
          <a href="https://www.linkedin.com/company/ae-vision9/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a href="https://www.tiktok.com/@ae.vision" target="_blank" rel="noopener noreferrer"><SiTiktok size={20} /></a>

          <a href="https://www.instagram.com/ae.vision_/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          <a href="https://linktr.ee/AEVISION" target="_blank" rel="noopener noreferrer">
            <FaLink size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Recons.sas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
