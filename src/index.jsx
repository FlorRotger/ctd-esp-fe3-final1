import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DarkThemeContextProvider, { DarkThemeContext } from './context/DarkThemeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkThemeContextProvider>

      <App/>

    </DarkThemeContextProvider>
  </React.StrictMode>
);


