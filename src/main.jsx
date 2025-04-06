import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles.css'; // Importera CSS
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importera React Router
import App from './App.jsx'; // Importera App-komponenten

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter används för att hantera routning */}
    <BrowserRouter basename="/AlexanderG-CA.github.io/"> {/* Ange rätt basväg här */}
      <Routes>
        <Route path="/" element={<App />} />
        {/* Lägg till fler rutter om du har flera sidor */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
