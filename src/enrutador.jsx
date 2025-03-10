import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import PaginaDeError from './paginas/PaginaDeError';

const Enrutador = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="*" element={<PaginaDeError />} />
    </Routes>
  );
};

export default Enrutador;
