import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import NoMatch from '../../components/NoMatch';

import './App.scss';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

