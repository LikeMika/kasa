import React from 'react';
import '../styles/Banniere.scss';

function Banniere({ image, title, showTitle = true }) {
  return (
    <div className="banniere" style={{ backgroundImage: `url(${image})` }}>
      {showTitle && <h1>{title}</h1>}
    </div>
  );
}

export default Banniere;
