import React, { useState, useEffect } from 'react';
import Tarjeta from '../componentes/Tarjeta';

const Inicio = () => {
  const [animes, setAnimes] = useState([]);
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerAnimes = async () => {
      try {
        const respuesta = await fetch('https://api.jikan.moe/v4/top/anime');
        const datos = await respuesta.json();
        setAnimes(datos.data);
        setFilteredAnimes(datos.data); 
      } catch (error) {
        setError('Error al cargar los animes');
      }
    };
    obtenerAnimes();
  }, []);

  const manejarBusqueda = (e) => {
    const valor = e.target.value.toLowerCase();
    setSearch(valor);
    const filtrados = animes.filter(
      (anime) =>
        anime.title.toLowerCase().includes(valor) ||
        anime.genres.some((genero) => genero.name.toLowerCase().includes(valor))
    );
    setFilteredAnimes(filtrados);
  };

  return (
    <main className="contenido">
      <h1 className="titulo-pagina">Explorador de Anime</h1> 
      <input
        type="text"
        value={search}
        onChange={manejarBusqueda}
        placeholder="Buscar por nombre o género..."
        className="buscador"
      />
      {error && <p className="error">{error}</p>}
      {!error && filteredAnimes.length === 0 && (
        <p className="sin-resultados">No se encontraron resultados.</p>
      )}
      <div className="grid-animes">
        {filteredAnimes.map((anime) => (
          <Tarjeta key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </main>
  );
};

export default Inicio;
