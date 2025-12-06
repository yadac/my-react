import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import MyHello from './components/MyHello'
// import MyEvent from './components/MyEvent';
import StateBasic from './components/StateBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));
const personalInfo = {
  name: "yosuke",
  age: 43
}
root.render(
  <React.StrictMode>
    <StateBasic init={0} />
  </React.StrictMode>
);

reportWebVitals();
