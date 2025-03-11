import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Aplicacion from './Aplicacion';
import './estilos/estilos.css'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Aplicacion />
  </React.StrictMode>
);
