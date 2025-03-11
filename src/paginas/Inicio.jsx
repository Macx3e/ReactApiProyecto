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

  const resetearBusqueda = () => {
    setSearch('');
    setFilteredAnimes(animes);
  };

  return (
    <main className="container mt-4">
      <h1 className="text-center mb-4">Explorador de Anime</h1>
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          value={search}
          onChange={manejarBusqueda}
          placeholder="Buscar por nombre o género..."
          className="form-control w-50 me-2"
        />
        <button onClick={resetearBusqueda} className="btn btn-danger">
          Resetear
        </button>
      </div>
      {error && <p className="text-danger text-center">{error}</p>}
      {!error && filteredAnimes.length === 0 && (
        <p className="text-center text-muted">No se encontraron resultados.</p>
      )}
      <div className="row">
        {filteredAnimes.map((anime) => (
          <div key={anime.mal_id} className="col-lg-4 col-md-6 mb-4">
            <Tarjeta anime={anime} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Inicio;
