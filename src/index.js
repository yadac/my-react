import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PortalBasic from './components/PortalBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="dialog"></div>
    <PortalBasic />
  </React.StrictMode>
);

reportWebVitals();
