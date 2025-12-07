import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StateParent from './components/StateParent';
import ScreenPoint from './components/ScreenPoint';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScreenPoint>
      <StateParent />
    </ScreenPoint>
  </React.StrictMode>
);

reportWebVitals();
