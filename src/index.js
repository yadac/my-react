import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListTemplate from './components/ListTemplate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListTemplate render=
      {
        elem => (
          <>
            <dt>
              <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                {elem.title}({elem.price}円)
              </a>
            </dt>
            <dd>{elem.summary}</dd>
          </>
        )
      }
    />
  </React.StrictMode>
);

reportWebVitals();
