import React from 'react';
import '../styles/Banniere.scss';

function Banniere({ image, title, noOverlay }) {
  return (
    <div className={`banner ${noOverlay ? 'no-overlay' : ''}`}>
      <img src={image} alt="bannière" />
      {!noOverlay && <div className="overlay"></div>}
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Banniere;
