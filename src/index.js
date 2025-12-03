import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyHello from './components/MyHello'

const root = ReactDOM.createRoot(document.getElementById('root'));
const personalInfo = {
  name: "yosuke",
  age: 43
}
root.render(
  <React.StrictMode>
    <MyHello person={personalInfo} func={(args) => { alert(args) }} />
  </React.StrictMode>
);

reportWebVitals();
