import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import MyHello from './components/MyHello'
import MyHello from './components/MyEvent'
import MyEvent from './components/MyEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
const personalInfo = {
  name: "yosuke",
  age: 43
}
root.render(
  <React.StrictMode>
    {/* <MyHello person={personalInfo} func={(args) => { alert(args) }} /> */}
    <MyEvent type="time" />
  </React.StrictMode>
);

reportWebVitals();
