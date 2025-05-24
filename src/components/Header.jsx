import { Link, useLocation  } from 'react-router-dom';
import logo from '../assets/img/logo-header.png';
import '../styles/Header.scss';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={location.pathname === '/a-propos' ? 'active' : ''}
        >
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
