import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <HashRouter basename='/react-countries'>
=======
    <BrowserRouter basename='/react-countries/'>
>>>>>>> 4052c5df4bcdac07942213838c35ec13eaca1e97
      <App />
    </HashRouter>
  </StrictMode>,
);
