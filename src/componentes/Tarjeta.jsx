import React from 'react';

const Tarjeta = ({ anime }) => {
  return (
    <div className="tarjeta">
      <img src={anime.images.jpg.large_image_url} alt={anime.title} />
      <h3>{anime.title}</h3>
      <p>Tipo: {anime.type}</p>
      <p>Clasificación: {anime.score}</p>
    </div>
  );
};

export default Tarjeta;
