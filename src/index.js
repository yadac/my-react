import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SuspenseSimple from './components/SuspenseSimple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SuspenseSimple />
  </React.StrictMode>
);

reportWebVitals();
