import React from 'react';

const Tarjeta = ({ anime }) => {
  return (
    <div className="card h-100">
      <img
        src={anime.images.jpg.large_image_url}
        className="card-img-top"
        alt={anime.title}
      />
      <div className="card-body">
        <h5 className="card-title">{anime.title}</h5>
        <p className="card-text">Tipo: {anime.type}</p>
        <p className="card-text">Clasificación: {anime.score}</p>
        <a href="#" className="btn btn-primary">
          Ver más
        </a>
      </div>
    </div>
  );
};

export default Tarjeta;
