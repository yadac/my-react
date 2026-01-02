import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MaterialBasic from './components/MaterialBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MaterialBasic />
  </React.StrictMode>
);

reportWebVitals();
