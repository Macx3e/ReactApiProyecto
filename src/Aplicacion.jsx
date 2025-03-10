import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import Enrutador from './enrutador'; // Importa el enrutador

const Aplicacion = () => {
  return (
    <Router>
      <Encabezado />
      <Enrutador />
    </Router>
  );
};

export default Aplicacion;
