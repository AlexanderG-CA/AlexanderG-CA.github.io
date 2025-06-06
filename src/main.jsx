import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles.css'; 
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);