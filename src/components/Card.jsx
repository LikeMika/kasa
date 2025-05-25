// src/components/Card.jsx
import React from 'react';
import '../styles/Card.scss';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card" style={{ backgroundImage: `url(${cover})` }}>
      <div className="card-title">{title}</div>
    </Link>
  );
}

export default Card;
