import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

console.log('[APP] : Renderer execution started');

const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </StrictMode>
);