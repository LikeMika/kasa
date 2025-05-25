import logoFooter from '../assets/img/logo-footer.png';
import '../styles/Footer.scss'; 

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa Logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
