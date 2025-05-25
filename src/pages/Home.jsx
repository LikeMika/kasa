import React from 'react';
import Banniere from '../components/Banniere';
import Gallery from '../components/Gallery';
import bannerImage from '../assets/img/banner-home.png';

function Home() {
  return (
    <div className="home">
      <Banniere image={bannerImage} title="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
