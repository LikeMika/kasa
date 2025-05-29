import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import logements from '../assets/data/logements.json';
import '../styles/Logement.scss';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />; //étape 9
  }

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />
      {
        <h1>{logement.title}</h1>
      }
    </div>
  );
}

export default Logement;
