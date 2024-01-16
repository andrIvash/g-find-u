import React from 'react';
import { Link } from 'react-router-dom';
import Screen from '../../containers/Screen';

import './NoMatch.scss';

export const NoMatch = () => {
    return (
        <Screen>
            <div className='noMatch' data-testid='NoMatch'>
                <h2>Wrong URL</h2>
                <p>
                    <Link to='/'>Go to the home page</Link>
                </p>
            </div>
        </Screen>
    );
};