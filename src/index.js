import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StyledPanel from './components/StyledPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledPanel>
      <p>child1</p>
      <p>child2</p>
    </StyledPanel>
  </React.StrictMode>
);

reportWebVitals();
