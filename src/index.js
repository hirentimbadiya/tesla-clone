import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
  "homepage": "https://hirentimbadiya.github.io/tesla-clone",
  "predeploy": "npm run build",
  "deploy" : "gh-pages -d build"
*/