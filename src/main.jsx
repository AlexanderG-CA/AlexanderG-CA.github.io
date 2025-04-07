import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles.css'; // Importera CSS
import { BrowserRouter } from 'react-router-dom'; // Importera BrowserRouter för routing
import App from './App.jsx'; // Importera App komponent

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter används i routing */}
    <BrowserRouter basename="/AlexanderG-CA.github.io/">
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
);
