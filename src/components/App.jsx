import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Housing from '../pages/Logement';
import About from '../pages/About';
import NotFound from '../pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Housing />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
