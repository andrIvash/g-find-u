import React, { useContext } from 'react';
import { DarkThemeContext } from '../../context/darkThemeContext';

import './Header.scss';

export const Header = () => {
    const darkTheme = useContext(DarkThemeContext);
    return (
        <div className={`header ${darkTheme ? "header--dark" : ""}`}>
            <h2>Header</h2>
            <p>
                test
            </p>
        </div>
    );
};