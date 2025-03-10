import React, { useState, useEffect } from 'react';
import Tarjeta from '../componentes/Tarjeta';

const Inicio = () => {
  const [animes, setAnimes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerAnimes = async () => {
      try {
        const respuesta = await fetch('https://api.jikan.moe/v4/top/anime');
        const datos = await respuesta.json();
        setAnimes(datos.data);
      } catch (error) {
        setError('Error al cargar los animes');
      }
    };
    obtenerAnimes();
  }, []);

  return (
    <main className="contenido">
      {error && <p>{error}</p>}
      {!error && animes.length === 0 && <p>Cargando...</p>}
      <div className="grid-animes">
        {animes.map((anime) => (
          <Tarjeta key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </main>
  );
};

export default Inicio;
