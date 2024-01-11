import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';

console.log('[APP] : Renderer execution started');

const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);