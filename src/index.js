import React from 'react';
import ReactDOM from 'react-dom';

import { AlertProvider } from './context/alert/AlertState';
import { GithubProvider } from './context/github/GithubState';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GithubProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </GithubProvider>
  </React.StrictMode>
);