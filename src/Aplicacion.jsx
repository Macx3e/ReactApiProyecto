import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Encabezado from './componentes/Encabezado';
import Enrutador from './enrutador';
import ErrorBoundary from './componentes/ErrorBoundary';

const Aplicacion = () => {
  return (
    <Router>
      <Encabezado />
      <ErrorBoundary>
        <Enrutador />
      </ErrorBoundary>
    </Router>
  );
};

export default Aplicacion;
