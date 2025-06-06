import bannerAbout from '../assets/img/banner-about.png';
import Banniere from '../components/Banniere';
import Collapse from '../components/Collapse';
import aboutData from '../assets/data/about.json';
import '../styles/About.scss';

function About() { // Ajouter Index dans json about
  return (
    <div className="about">
      <Banniere image={bannerAbout} noOverlay />
       <div className="about-content">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title}>
            {item.content}
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default About;
