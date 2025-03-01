import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importando o Bootstrap
import './styles.css'; // Importando estilos personalizados
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);