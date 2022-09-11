import React from 'react';
import ReactDOM from 'react-dom/client';
//Añadimos Boostrap a nuestro proyecto
// import 'bootstrap/dist/css/bootstrap.css'
// ! Los estilos personalizados van debajo de Boostrap para no pisar los estilos
// import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='contenedor'>
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
