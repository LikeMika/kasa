import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
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
      <div className='logement-wrapper'>
        <div className='logement-info'>
            <h1>{logement.title}</h1>
            <h3>{logement.location}</h3>
            <Tags tags={logement.tags} />
        </div>
        <div className='logement-host-rating'>
            <div className='host'>
                <div className='host-name'>
                    {logement.host.name}
                </div>
                <div className='host-picture'>
                     <img src={logement.host.picture} alt={logement.host.name} />
                </div>
            </div>
            <Rating rating={logement.rating} />
        </div>
        <div className='description'>
            <Collapse title="Description" className="collapse-logement" >
                {logement.description}
            </Collapse>
            <Collapse title="Equipement" className="collapse-logement" >
                <div className="equipments-list">
                    {logement.equipments.map((item, index) => (
                    <span key={index}>{item}<br /></span>
                    ))}
                </div>
            </Collapse>

        </div>
      </div>
    </div>
  );
}

export default Logement;
