import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Ici s'afficheront les pages */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
