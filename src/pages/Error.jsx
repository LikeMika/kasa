import { Link } from 'react-router-dom';
import '../styles/Error.scss';

function NotFound() {
  return (
    <div className="error">
        <div className="error__four">404</div>
        <p className="error__oups">Oups! La page que vous demandez n'existe pas</p>
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
            Retourner sur la page d'accueil
        </Link>
    </div>
    
);

}

export default NotFound;
