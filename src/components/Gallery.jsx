import React from 'react';
import Card from './Card';
import '../styles/Gallery.scss';
import logements from '../assets/data/logements.json';

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
