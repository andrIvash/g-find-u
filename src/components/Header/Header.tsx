import React from 'react';
import { icons } from '../../components/common/Icons';

import './Header.scss';

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img className='icon rotate header__logoIcon' src={icons.github} />
            </div>
            <h1>GitHub Finder</h1>
        </div>
    );
};