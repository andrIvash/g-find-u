import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './containers/App';
import GithubService from './services/GithubService';

console.log('[APP] : Renderer execution started');

const root = createRoot(document.getElementById('app'));
GithubService.getInstance().init(process.env.API_KEY);
root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);