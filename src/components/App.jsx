import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Housing from '../pages/Logement';
import About from '../pages/About';
import NotFound from '../pages/Error';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
