import React, { useContext } from 'react';
import { DarkThemeContext } from '../../context/darkThemeContext';
import SimpleButton from '../../components/common/SimpleButton';

import './Header.scss';

export const Header = () => {
    const darkTheme = useContext(DarkThemeContext);
    return (
        <div className={`header ${darkTheme ? "header--dark" : ""}`}>
            <h2>Header</h2>
            <p>
                test
            </p>
            <SimpleButton
                onClick={() => {console.log("click");}} label="Search" />
        </div>
    );
};