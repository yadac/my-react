import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MaterialDrawer from './components/MaterialDrawer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MaterialDrawer />
  </React.StrictMode>
);

reportWebVitals();
