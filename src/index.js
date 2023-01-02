import React from 'react';
import { createRoot } from 'react-dom/client';
import { bind } from 'hyperhtml/esm';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>
);

// const app = new App();
// console.log(app)

// const appEl = document.getElementById('root');
// const renderApp = bind(appEl);

// renderApp`${App}`


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
