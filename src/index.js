import React from 'react';
import ReactDOM from 'react-dom/client';

import { AlertProvider } from './context/alert/AlertContext';
import { GithubProvider } from './context/github/GithubContext';

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